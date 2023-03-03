
export function Observer() {
    const options = {
        rootMargin: '10px 0px 0px 0px',
        threshold: 0
    }

    const observer = new window.IntersectionObserver(function (entries, observer) {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;


                img.src = img.dataset.src

                observer.unobserve(img);

                observer.unobserve(entry.target)
            }
        })
    }, options)
    const imgs = document.querySelectorAll('[data-src]')

    imgs.forEach(img => { observer.observe(img) })
    return () => {
        imgs.forEach(img => {
            observer.unobserve(img)
        })
    }

}

