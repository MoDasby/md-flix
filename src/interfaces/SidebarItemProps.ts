import { IconType } from 'react-icons/lib';

interface SidebarItemProps {
    icon: IconType
    text: string
    active?: boolean
    onClick?: () => void
}

export default SidebarItemProps;