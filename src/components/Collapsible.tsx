import { type PropsWithChildren, useState } from "react"

type CollapsibleProps = PropsWithChildren<{
    title: string
    defaultOpen?: boolean
}>

export default function Collapsible({children, title, defaultOpen = false}: CollapsibleProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return <div className="collapsible">
        <div className="collapsible-header" onClick={toggle}>
            <h2>{title}</h2>
            <button type="button" onClick={toggle}>{isOpen ? "Close" : "Open"}</button>
        </div>
        {isOpen && children}
    </div>
}