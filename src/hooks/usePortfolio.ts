import { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { collection, query, orderBy, limit, getDocs, startAfter, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export type PortfolioImage = {
  id: string;
  url: string;
  fileName: string;
};

export const BATCH_SIZE = 15;

// Global Cache Variables (persists across client-side navigation)
let cachedImages: PortfolioImage[] = [];
let cachedLastVisible: QueryDocumentSnapshot<DocumentData> | null = null;
let cachedHasMore: boolean = true;
let isCached: boolean = false;

export function usePortfolio() {
  // Initialize state with cached values if they exist
  const [images, setImages] = useState<PortfolioImage[]>(cachedImages);
  const [lastVisible, setLastVisible] = useState<QueryDocumentSnapshot<DocumentData> | null>(cachedLastVisible);
  const [loading, setLoading] = useState(!isCached);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(cachedHasMore);

  // The intersection observer hook for infinite scroll
  // rootMargin '400px' triggers the load smoothly before the user actually hits the bottom
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '400px',
  });

  const fetchInitialImages = async () => {
    // If we already have cached images, don't fetch again!
    if (isCached) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const q = query(
        collection(db, 'portfolio'),
        orderBy('order', 'asc'),
        limit(BATCH_SIZE)
      );
      const snapshot = await getDocs(q);

      const fetchedImages = snapshot.docs.map(doc => ({
        id: doc.id,
        url: doc.data().url,
        fileName: doc.data().fileName,
      }));

      const newLastVisible = snapshot.docs[snapshot.docs.length - 1];
      const newHasMore = snapshot.docs.length === BATCH_SIZE;

      // Update State
      setImages(fetchedImages);
      setLastVisible(newLastVisible);
      setHasMore(newHasMore);

      // Update Global Cache
      cachedImages = fetchedImages;
      cachedLastVisible = newLastVisible;
      cachedHasMore = newHasMore;
      isCached = true;

    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMoreImages = useCallback(async () => {
    if (!lastVisible || loadingMore || !hasMore) return;

    try {
      setLoadingMore(true);
      const q = query(
        collection(db, 'portfolio'),
        orderBy('order', 'asc'),
        startAfter(lastVisible),
        limit(BATCH_SIZE)
      );
      const snapshot = await getDocs(q);

      const fetchedImages = snapshot.docs.map(doc => ({
        id: doc.id,
        url: doc.data().url,
        fileName: doc.data().fileName,
      }));

      const newLastVisible = snapshot.docs[snapshot.docs.length - 1];
      const newHasMore = snapshot.docs.length === BATCH_SIZE;

      setImages(prev => {
        const updatedImages = [...prev, ...fetchedImages];
        cachedImages = updatedImages; // Update Global Cache
        return updatedImages;
      });
      
      setLastVisible(newLastVisible);
      setHasMore(newHasMore);
      
      // Update Global Cache
      cachedLastVisible = newLastVisible;
      cachedHasMore = newHasMore;

    } catch (error) {
      console.error("Error fetching more images:", error);
    } finally {
      setLoadingMore(false);
    }
  }, [lastVisible, loadingMore, hasMore]);

  // Initial Load
  useEffect(() => {
    fetchInitialImages();
  }, []);

  // Infinite Scroll Trigger
  useEffect(() => {
    if (inView) {
      fetchMoreImages();
    }
  }, [inView, fetchMoreImages]);

  return {
    images,
    loading,
    loadingMore,
    hasMore,
    ref
  };
}
