import { headers } from 'next/dist/client/components/headers'
import React from 'react'

export default async function getAllProjects() {
    
    const res = await fetch('https://api.jsonbin.io/v3/b/64778254b89b1e2299a7ed90', {
            headers: {
                "X-Access-Key": "$2b$10$iSFBEmm84y0sKcAe235vbOQ8HPzmGD/fTTlVqa0RW/56.s9cNdG36"
            }

        })

    if (!res.ok) {
        throw new Error('failed to fetch projects')
    }

    const projects = await res.json()
    
    return projects

}
