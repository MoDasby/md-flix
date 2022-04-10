import { IconType } from 'react-icons/lib';

interface SidebarItemProps {
    icon: IconType
    text: string
    active?: boolean
    redirect: string
    onClick?: () => void
}

export default SidebarItemProps;