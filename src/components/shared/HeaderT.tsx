import React from 'react'


const HeaderT = () => {
    return (
        <nav id="navbar" className="page-header navbar navbar-expand navbar-light fixed-top">
            <div className="fixed-container">
                <button type="button" aria-label="Toggle navigation" className="ml-n2 ml-lg-0 navbar-toggler collapsed">
                    <span className="a-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="#9e9e9e" d="M21 11.333H3v1.5h18v-1.5zM21 18.167H3v1.5h18v-1.5zM21 4.5H3V6h18V4.5z"></path></svg>
                    </span>
                </button>
                <div className="align-items-center flex-grow-1 row">
                    <div className="col-xl-3 col-lg-4 col-6" style="position: static;"><a aria-label="home page" className="navbar-brand" href="/">
                        <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="" d="M32.0282 10.8876V29.1124C32.0282 30.7071 30.7337 32 29.1372 32H19.8938C18.2837 32 16.9789 30.6967 16.9789 29.0885V21.3133C16.9789 20.5966 16.3972 20.01 15.682 20.0004C14.9493 19.9908 14.3492 20.6165 14.3492 21.3492V29.0885C14.3492 30.6967 13.0444 32 11.4343 32H10.891C9.29446 32 8 30.7071 8 29.1124V10.8876C8 9.29294 9.29446 8 10.891 8H29.1372C30.7337 8 32.0282 9.29294 32.0282 10.8876ZM65.7136 32C75.8207 32 81.6905 29.5969 84.5288 23.5919C85.0705 22.4458 85.3422 21.1904 85.3422 19.923V10.8876C85.3422 9.29294 84.0477 8 82.4512 8H81.9079C80.2978 8 78.993 9.30332 78.993 10.9115V18.6508C78.993 19.3827 78.3929 20.0092 77.6601 19.9996C76.9274 19.99 76.3633 19.4026 76.3633 18.6867V10.9115C76.3633 9.30332 75.0584 8 73.4484 8H64.205C62.6085 8 61.314 9.29294 61.314 10.8876V29.1124C61.314 30.7071 62.6085 32 64.205 32H65.7256C65.7216 32 65.7176 32 65.7136 32ZM109.109 8H90.8628C89.2663 8 87.9718 9.29294 87.9718 10.8876V11.4303C87.9718 13.0385 89.2767 14.3418 90.8868 14.3418H98.6351C99.3679 14.3418 99.9951 14.9412 99.9855 15.673C99.9759 16.3874 99.3878 16.9684 98.6711 16.9684H90.8868C89.2767 16.9684 87.9718 18.2717 87.9718 19.8799C87.9718 21.1369 88.2403 22.3812 88.7717 23.5201C91.5971 29.5777 97.4741 31.9992 107.621 31.9992C107.616 31.9992 107.612 31.9992 107.607 31.9992H109.109C110.706 31.9992 112 30.7063 112 29.1116V10.8876C112 9.29294 110.706 8 109.109 8ZM58.6852 10.8876V29.1124C58.6852 30.7071 57.3907 32 55.7942 32H37.548C35.9515 32 34.657 30.7071 34.657 29.1124V10.8876C34.657 9.29294 35.9515 8 37.548 8H55.7942C57.3907 8 58.6852 9.29294 58.6852 10.8876ZM55.1598 20.0004C48.928 20.0004 46.6707 17.7465 46.6707 11.5221C46.6707 17.7465 44.4142 20.0004 38.1824 20.0004C44.4142 20.0004 46.6707 22.2543 46.6707 28.4795C46.6707 22.2551 48.9272 20.0004 55.1598 20.0004Z" fill="#FAFAFA"></path><path d="M32.0282 10.8876V29.1124C32.0282 30.7071 30.7337 32 29.1372 32H19.8938C18.2837 32 16.9789 30.6967 16.9789 29.0885V21.3133C16.9789 20.5966 16.3972 20.01 15.682 20.0004C14.9493 19.9908 14.3492 20.6165 14.3492 21.3492V29.0885C14.3492 30.6967 13.0444 32 11.4343 32H10.891C9.29446 32 8 30.7071 8 29.1124V10.8876C8 9.29294 9.29446 8 10.891 8H29.1372C30.7337 8 32.0282 9.29294 32.0282 10.8876ZM65.7136 32C75.8207 32 81.6905 29.5969 84.5288 23.5919C85.0705 22.4458 85.3422 21.1904 85.3422 19.923V10.8876C85.3422 9.29294 84.0477 8 82.4512 8H81.9079C80.2978 8 78.993 9.30332 78.993 10.9115V18.6508C78.993 19.3827 78.3929 20.0092 77.6601 19.9996C76.9274 19.99 76.3633 19.4026 76.3633 18.6867V10.9115C76.3633 9.30332 75.0584 8 73.4484 8H64.205C62.6085 8 61.314 9.29294 61.314 10.8876V29.1124C61.314 30.7071 62.6085 32 64.205 32H65.7256C65.7216 32 65.7176 32 65.7136 32ZM109.109 8H90.8628C89.2663 8 87.9718 9.29294 87.9718 10.8876V11.4303C87.9718 13.0385 89.2767 14.3418 90.8868 14.3418H98.6351C99.3679 14.3418 99.9951 14.9412 99.9855 15.673C99.9759 16.3874 99.3878 16.9684 98.6711 16.9684H90.8868C89.2767 16.9684 87.9718 18.2717 87.9718 19.8799C87.9718 21.1369 88.2403 22.3812 88.7717 23.5201C91.5971 29.5777 97.4741 31.9992 107.621 31.9992C107.616 31.9992 107.612 31.9992 107.607 31.9992H109.109C110.706 31.9992 112 30.7063 112 29.1116V10.8876C112 9.29294 110.706 8 109.109 8ZM58.6852 10.8876V29.1124C58.6852 30.7071 57.3907 32 55.7942 32H37.548C35.9515 32 34.657 30.7071 34.657 29.1124V10.8876C34.657 9.29294 35.9515 8 37.548 8H55.7942C57.3907 8 58.6852 9.29294 58.6852 10.8876ZM55.1598 20.0004C48.928 20.0004 46.6707 17.7465 46.6707 11.5221C46.6707 17.7465 44.4142 20.0004 38.1824 20.0004C44.4142 20.0004 46.6707 22.2543 46.6707 28.4795C46.6707 22.2551 48.9272 20.0004 55.1598 20.0004Z" fill="url(#paint0_diamond_421_21429)" fill-opacity="0.15"></path><defs><radialGradient id="paint0_diamond_421_21429" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(67.0975 18.287) rotate(-170.915) scale(67.8061 17.4261)"><stop stop-color="#4052E1"></stop><stop offset="0.197917" stop-color="#EBC0D2"></stop><stop offset="1" stop-color="#B5E4FF"></stop></radialGradient></defs></svg>
                    </a>
                    </div>
                    <div className="d-none d-lg-block col-xl-6 col-lg-4">
                    </div>
                    <div className="col-xl-3 col-lg-4 col-6">
                        <div className="d-flex align-items-center justify-content-end navbar-nav">
                            <div className="d-lg-none ml-1 ml-md-2 nav-item">
                                <a href="#" className="nav-link nav-icon rounded-pill nav-link" role="button">
                                    <span className="a-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#9e9e9e" d="M22.5 21.442l-5.663-5.692a8.25 8.25 0 10-1.087 1.087l5.692 5.663 1.058-1.058zM3.75 10.5a6.75 6.75 0 1113.5 0 6.75 6.75 0 01-13.5 0z"></path></svg>
                                    </span>
                                </a>
                            </div>
                            <div className="ml-1 ml-md-2 nav-item">
                                <a aria-label="messages" className="nav-link nav-icon rounded-pill" href="/messages">
                                    <span data-icon="envelope" className="a-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#9e9e9e" fill-rule="evenodd" d="M22.504 11.36c0 5.444-4.414 9.858-9.859 9.858a9.818 9.818 0 01-4.371-1.02L2.246 22.5l-.75-.883 2.398-5.713a9.817 9.817 0 01-1.108-4.545c0-5.445 4.414-9.859 9.86-9.859 5.444 0 9.858 4.414 9.858 9.86zm-1.519.008a8.34 8.34 0 01-12.652 7.139l-4.447 1.822 1.8-4.366a8.34 8.34 0 1115.299-4.596z" clip-rule="evenodd"></path><path fill="#9e9e9e" d="M18.258 8.885H7.571v1.5h10.687v-1.5zM14.25 12.885H7.571v1.5h6.68v-1.5z"></path></svg>
                                    </span>
                                </a>
                            </div>
                            <div className="d-none d-lg-block ml-1 ml-md-2 nav-item">
                                <a className="nav-link nav-icon rounded-pill" aria-label="bookmarks" href="/bookmarks"><span className="a-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 16 24"><path fill="#9e9e9e" d="M14 2v17.063L8.675 16.37 8 16.032l-.675.338L2 19.062V2h12zm0-1.5H2A1.5 1.5 0 00.5 2v19.5L8 17.75l7.5 3.75V2A1.5 1.5 0 0014 .5z"></path></svg>
                                </span>
                                </a>
                            </div>
                            <div className="ml-1 ml-md-2 nav-item">
                                <div className="dropdown-notification dropdown">
                                    <button className="nav-link-toggle nav-link nav-icon rounded-pill dropdown-toggle" aria-haspopup="true" aria-expanded="false" aria-label="notifications">
                                        <img src="/static/media/notification-icon.853d35f1.svg" alt="">
                                    </button>
                                </div>
                            </div>
                            <div aria-label="my account" className="d-none d-lg-block ml-1 ml-md-2 nav-item">
                                <div className="a-dropdown dropdown">
                                    <button className="nav-link-toggle nav-link nav-icon rounded-circle dropdown-toggle" aria-haspopup="true" aria-expanded="false" aria-label="my account">
                                        <div className="undefined profilePic" style="background: url(&quot;https://firebasestorage.googleapis.com/v0/b/remote-students-community-app.appspot.com/o/DefaultProfilePic.jpg?alt=media&amp;token=cfc326ef-1ceb-401e-8060-6209a5faafd0&quot;) 50% 50% / cover no-repeat white; width: 32px; height: 32px; border-radius: 16px; border: 0px solid white;">
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default HeaderT