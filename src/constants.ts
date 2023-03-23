import { ReferI, JobI, EventsI, InviteI, HomeI } from 'src/assets';
import { NotiI, MsgI, BookI, defaultImage } from 'src/assets'

export const nav_features: { id: string, title: string, path: string, icon: string }[] = [
    {
        id: "d23978gb",
        title: "Home",
        path: "/",
        icon: HomeI
    },
    {
        id: "xqw139",
        title: "Get Referred",
        path: '/GetReferred',
        icon: ReferI
    },
    {
        id: "xqw12ed339",
        title: "Job Boards",
        path: "/JobBoards",
        icon: JobI
    },
    {
        id: "x234dqw139",
        title: "Events",
        path: "/Events",
        icon: EventsI
    },
    {
        id: "x389h13d",
        title: "Invite Friends",
        path: '/InviteFriends',
        icon: InviteI
    },
]

export const header_icons: { id: string, title: string, path: string, icon: string }[] = [

    {
        id: "3d23d",
        title: "Messages",
        icon: MsgI,
        path: "/Messages",
    },
    {
        id: "9cb2437",
        title: "Bookmark",
        icon: BookI,
        path: "/bookmarks",
    },
    {
        id: "c2x3498h",
        title: "Notifications",
        icon: NotiI,
        path: "/Notifications",
    },
    {
        id: "32x23",
        title: "Profile",
        icon: defaultImage,
        path: "/profile",
    },
]

/* My Communities Emojis */
type Community = {
    title: string,
    path: string,
    emoji: string;
}

export const communities: Community[] = [
    {
        title: "Startup Hub",
        path: "/startup-hub",
        emoji: "🚀"
    },
    {
        title: "Community Builders",
        path: "/community-builders",
        emoji: "🌳"
    },
    {
        title: "Crypto & Blockchain",
        path: "/crypto-and-blockchain",
        emoji: "💱"
    },
    {
        title: "HR & Recruiting",
        path: "/hr-recruiting",
        emoji: "🤝"
    },
    {
        title: "Creator Space",
        path: "/creator-space",
        emoji: "🦋"
    },
    {
        title: "Marketing & Sales",
        path: "/marketing-and-sales",
        emoji: "📈"
    },
    {
        title: "Design",
        path: "/design",
        emoji: "🎨"
    },
]