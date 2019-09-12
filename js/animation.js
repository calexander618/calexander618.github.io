        const colors = ['#173FBF', '#30639B', '#3CAEA3', '#F6D55C', '#ED553B'];

        var onLoadTimeline = anime.timeline({
            easing: 'easeOutExpo',
            duration: 750
        });

        onLoadTimeline.add({
                targets: 'section div',
                width: '100%',
                backgroundColor: (el, i, t) => {
                    return colors[Math.floor(i / 2)];
                },
                delay: anime.stagger(100)
            })
            .add({
                targets: 'section div',
                width: '95%',
                translateX: '0.5%',
                opacity: 0.6,
            });

//        document.querySelector('h1').addEventListener('mouseover', () => {
//
//        })

