import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export const UseLenis = () => {
    useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}