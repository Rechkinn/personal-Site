let leftValue = 1000; // направление движения автоскролла
const timeAutoScroll = 5; // время срабатывания автоскролла (секунд)
const minWidthScreenForAutoScroll = 1024; // минимальная ширина для работы автоскролла

function scrollCustom(stickyScrollContent, direction) {
    stickyScrollContent.scrollBy({
        left: direction,
        behavior: 'smooth',
    })

}

function scrollClickButton(nameSection, direction = 'left') {
    
    let znak = '-';
    if(direction === 'right') {
        znak = '+';
    }

    let stickyScroll = document.querySelector(`.section__${nameSection}-sticky-scroll`);
    for(let i = 0; i < stickyScroll.childNodes.length; i++) {
        if(stickyScroll.children[i].classList[0] == 'sticky-scroll__content') {
            if(direction === 'left') {

            }
            scrollCustom(stickyScroll.children[i], Number(`${znak}${stickyScroll.clientWidth}`));
            break;
        }
    }
}

function setIntervalAutoScroll(stickyScrollContent, circlesList) {
    setInterval(() => {
        if(window.innerWidth >= minWidthScreenForAutoScroll) {
            circlesList.forEach((circle, indexCircle) => {
                if(circle.classList.contains('sticky-scroll__circle_current')) {
                    if(indexCircle === 0) {
                        leftValue = 1;
                    }
                    else if(indexCircle === circlesList.length - 1) {
                        leftValue = -1;
                    }
                }
            });
            scrollCustom(stickyScrollContent, leftValue)
        }
    }, timeAutoScroll * 1000)
}

document.addEventListener("DOMContentLoaded", () => {

    const stickyScrollList = document.querySelectorAll('.sticky-scroll');
    let nameSectionList = [];
    stickyScrollList.forEach(stickyScroll => {
        // ['section__qualities', 'section__contact']
        nameSectionList.push(stickyScroll.classList[0].split('-')[0]);
    });

    stickyScrollList.forEach((stickyScroll, idx) => {

        let stickyScrollContent     = stickyScroll.querySelector('.sticky-scroll__content')
        const circlesList           = stickyScroll.querySelectorAll('.sticky-scroll__circle')
        const stickyScrollItem      = stickyScrollContent.querySelector('.sticky-scroll__item')
        const stickyScrollItemWidth = stickyScrollItem.clientWidth.toFixed(0);
        
        if(nameSectionList[idx] === 'section__qualities') {
            setIntervalAutoScroll(stickyScrollContent, circlesList);
        }

        stickyScrollContent.addEventListener("scroll", () => {
            const section           = document.querySelector(`.${nameSectionList[idx]}`);
            let sectionWidth        = section.clientWidth.toFixed(0);
            sectionWidth            /= (sectionWidth / stickyScrollItemWidth).toFixed(0);
            const differentWidth    = stickyScrollContent.scrollLeft.toFixed(0) % sectionWidth;

            if(differentWidth < 1000) {
                circlesList.forEach(circle => {
                    circle.classList.remove('sticky-scroll__circle_current');
                });
                const indexCircle = (stickyScrollContent.scrollLeft / sectionWidth).toFixed(0);
                circlesList[indexCircle].classList.add('sticky-scroll__circle_current');
            }
        });
    });
})