        const colors = ['#173FBF', '#30639B', '#3CAEA3', '#F6D55C', '#ED553B'];

        var textWrapper = document.querySelector('.ml11 .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

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
                translateX: '2.5%',
                opacity: 0.6,
            })
            .add({
                targets: '.ml1 .letter',
                scale: [0.3, 1],
                opacity: [0, 1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 600,
                delay: (el, i) => 70 * (i + 1)
            })
            .add({
                targets: '.ml11 .letter',
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 600,
                offset: '-=775',
                delay: (el, i) => 34 * (i + 1)
            });

//        document.querySelector('h1').addEventListener('mouseover', () => {
//
//        })

