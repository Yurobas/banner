document.addEventListener("DOMContentLoaded", () => {
    +function banner() {
        let banner = null

        if (!document.querySelector('.bannerAlert')) {
            banner = document.createElement('div')
            banner.classList.add('bannerAlert')
            banner.innerHTML = `
                <div class="bannerAlert__content">
                    <p class="bannerAlert__text">
                        Уважаемые Клиенты! В связи с действующими ограничениями со стороны производителя автоматики Clack, поддержка ресурса невозможна и остановлена.
                    </p>
                    <div class="bannerAlert__close" title="Закрыть">
                        <svg class="bannerAlert__icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path d="M10.649 9.01476L17.658 2.00569C18.1141 1.54977 18.1141 0.812589 17.658 0.356725C17.2021 -0.099194 16.4649 -0.099194 16.009 0.356725L8.99992 7.36574L1.99107 0.356725C1.53493 -0.099194 0.798022 -0.099194 0.342103 0.356725C-0.114034 0.812644 -0.114034 1.54977 0.342103 2.00569L7.3509 9.01476L0.342158 16.0238C-0.11398 16.4797 -0.11398 17.2169 0.342158 17.6727C0.450304 17.7812 0.578815 17.8672 0.720306 17.9258C0.861797 17.9845 1.01348 18.0146 1.16664 18.0144C1.46512 18.0144 1.76371 17.9002 1.99112 17.6727L8.99992 10.6637L16.009 17.6727C16.1172 17.7812 16.2457 17.8672 16.3872 17.9258C16.5287 17.9844 16.6804 18.0146 16.8335 18.0144C17.132 18.0144 17.4306 17.9002 17.658 17.6727C18.1141 17.2168 18.1141 16.4797 17.658 16.0238L10.649 9.01476Z"/>
                        </svg>
                    </div>
                </div>
            `
            document.body.appendChild(banner)
        } else {
            banner = document.querySelector('.bannerAlert')
        }

        const close = banner.querySelector('.bannerAlert__close')
        const isClosed = sessionStorage.getItem('isBannerClosed')

        if (!isClosed) {
            banner.classList.add('--active')
            const height = banner.getBoundingClientRect().height
            document.body.style.paddingTop = `${height}px`
        }

        close.addEventListener('click', event => {
            event.preventDefault()
            document.body.style.paddingTop = 0
            banner.classList.remove('--active')
            sessionStorage.setItem('isBannerClosed', 1)
        })
    }()
})
