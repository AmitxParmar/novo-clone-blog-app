import { ReferI, JobI, EventsI, InviteI } from 'src/assets';

export const nav_features: { id: string, name: string, path: string, icon: string | any }[] = [
    {
        id: "xqw139",
        name: "Get Referred",
        path: '/get-referred',
        icon: ReferI
    },
    {
        id: "xqw12ed339",
        name: "Job Boards",
        path: "/job-boards",
        icon: JobI
    },
    {
        id: "x234dqw139",
        name: "Events",
        path: "/events",
        icon: EventsI
    },
    {
        id: "x389h13d",
        name: "Invite Friends",
        path: '/invite-friends',
        icon: InviteI
    },
]