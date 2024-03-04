import { useCallback } from "react"

export const useScrollToTop = (top = 0) => {
    const scrollToTop = useCallback(() => {
        if (typeof window !== 'undefined') {
            window.scrollTo({
                top,
                behavior: 'smooth',
            })
        }
    }, [top])
    return scrollToTop
}