import React from 'react'
import scrutinyPreview from '../../assets/scrutinyPreview.jpg'
import smiPreview from '../../assets/smiPreview.png'
import ruumzyPreview from '../../assets/ruumzyPreview.png'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'

const content = [
    {
        title: 'Ruumzy',
        previewPic: ruumzyPreview,
        quickDescription: <div>
            A mobile application to simplify apartment subletting for
            college students
        </div>,
        fullDescription: <div>
            <ul>
                <li> Co-Founder/Lead Developer </li>
                <li> Designed and developed application using Python - Flask, React Native, Socket.io -
                    WebSockets, Docker, Redis, AWS (RDS, LightSail VMs, S3, SNS, SES, CloudFront, etc.) </li>
                <li> Received $5000 in funding through Northeastern University Khoury College Jelly Fund </li>
            </ul>
        </div>,
        gitURLs: [{ type: 'Private mono-repo (access provided on request)', url: 'https://github.com/shan-srini/ruumzy' }],
        projectURL: 'https://ruumzy.com'
    },
    {
        title: 'Srigmadeit',
        previewPic: smiPreview,
        quickDescription: <div>
            A fully supported Web Application to host and interactively display my brother's amateur photography/videography work.
        </div>,
        fullDescription: <div>
            <ul>
                <li>Leveraged tools such as ReactJS (front end), Python (REST API), MongoDB, Google Cloud Run (REST API), Docker, S3 API for Cloud Object Storage (photo & video storage), and Cloudflare Edge Workers (Reverse Proxy)</li>
                <li>Averages a range of 15-30 views a day!</li>
                <li>Researched and designed to scale to reasonable limits and still remain free (ask me how! <EmojiEmotionsIcon />)</li>
            </ul>
        </div>,
        gitURLs: [{ type: 'UI', url: 'https://github.com/shan-srini/srigmadeit-ui' }, { type: 'API', url: 'https://github.com/shan-srini/srigmadeit-API' }],
        projectURL: 'https://srigmadeit.com'
    },
    {
        title: 'ScrutinyFB',
        previewPic: scrutinyPreview,
        quickDescription: <div>
            Scrutinize Football Statistics!
            <br />
            A simple, uncluttered solution to viewing statistics, and performing basic statistic analysis for Fantasy Football players and Football lovers.
        </div>,
        fullDescription: <div>
            <ul>
                <li>Developed an iOS application to provide a simple, uncluttered solution to viewing and analyzing NFL statistics, including comparing player statistics side by side, viewing player statistics splits, etc.</li>
                <li>Designed and implemented Data Retrieval (Web scraping - Python: Requests, LXML, Pandas), Persistence (REST API - Python: Flask), and Data (MySQL) layers for application</li>
                <li>Collaborated with a friend who assisted in front-end design and development</li>
            </ul>
        </div>,
        gitURLs: [{ type: 'UI', url: 'https://github.com/shan-srini/ScrutinyFB' }, { type: 'API', url: 'https://github.com/shan-srini/scrutinyFB_api' }],
        projectURL: 'https://apps.apple.com/us/app/scrutinyfb/id1491261180'
    }
]

export default content;