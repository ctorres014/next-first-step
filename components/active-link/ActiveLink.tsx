'use client'

import Link from "next/link"
import { usePathname } from "next/navigation";
import style from "./ActiveLink.module.css";

interface Props {
    path: string,
    text: string
}

export const ActiveLink = ({path, text}: Props) => {
    // hook
    const pathName = usePathname();
  return (
    <Link className="{ `${ style.link } ${ (patnName === path) && style.['active-link']}` }" href={path}>{text}</Link>
  )
}

export default ActiveLink
