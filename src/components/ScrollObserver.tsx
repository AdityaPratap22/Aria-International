"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollObserver() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Select all potential reveal targets
    const revealElements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-fade"
    );

    const observerOptions = {
      root: null, // use viewport
      rootMargin: "0px 0px -8% 0px", // triggers slightly before elements fully enter screen
      threshold: 0.05, // trigger when 5% visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          if (target.classList.contains("reveal")) {
            target.classList.add("reveal-visible");
          } else if (target.classList.contains("reveal-left")) {
            target.classList.add("reveal-left-visible");
          } else if (target.classList.contains("reveal-right")) {
            target.classList.add("reveal-right-visible");
          } else if (target.classList.contains("reveal-fade")) {
            target.classList.add("reveal-fade-visible");
          }
          // Unobserve to run the animation exactly once (prevents repeated trigger performance hits)
          observer.unobserve(target);
        }
      });
    }, observerOptions);

    revealElements.forEach((el) => {
      // Remove any previous activation classes on page changes before observing
      el.classList.remove(
        "reveal-visible",
        "reveal-left-visible",
        "reveal-right-visible",
        "reveal-fade-visible"
      );
      observer.observe(el);
    });

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [pathname, searchParams]);

  return null;
}
