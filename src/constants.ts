import { ReferI, JobI, EventsI, InviteI, HomeI } from 'src/assets';

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


/* My Communities Emojis */
type Community = {
    id: string,
    title: string,
    path: string,
    emoji: string;
}

export const communities: Community[] = [
    {
        id: "d32d",
        title: "Startup Hub",
        path: "/startup-hub",
        emoji: "🚀"
    },
    {
        id: "d3c42d",
        title: "Community Builders",
        path: "/community-builders",
        emoji: "🌳"
    },
    {
        id: "dx332d",
        title: "Crypto & Blockchain",
        path: "/crypto-and-blockchain",
        emoji: "💱"
    },
    {
        id: "12d3c32d",
        title: "HR & Recruiting",
        path: "/hr-recruiting",
        emoji: "🤝"
    },
    {
        id: "d33d2d",
        title: "Creator Space",
        path: "/creator-space",
        emoji: "🦋"
    },
    {
        id: "d1z32d",
        title: "Marketing & Sales",
        path: "/marketing-and-sales",
        emoji: "📈"
    },
    {
        id: "d1z132d",
        title: "Design",
        path: "/design",
        emoji: "🎨"
    },
]