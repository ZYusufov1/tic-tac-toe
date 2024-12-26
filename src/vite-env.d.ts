/// <reference types="vite/client" />
declare module '*.svg' {
    import React from 'react'
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    const src: string
    export { ReactComponent }
    export default src
}