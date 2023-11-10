import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Timeline from '../../components/Timeline';

export default function Home() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout
            title={`About`}
            description={`About ${siteConfig.title}`}>
            <main>
                About
                {/* 时间线 */}
                <Timeline animate={true}>
                    <Timeline.Item dateText={'2022.02 - Present'}>
                        <p>Work in ...</p>
                    </Timeline.Item>
                    <Timeline.Item dateText={'2021 - 2022.01'}>
                        <p>Work in ...</p>
                    </Timeline.Item>
                    <Timeline.Item dateText={'2019 - 2020'}>
                        <p>Practice in ...</p>
                    </Timeline.Item>
                    <Timeline.Item dateText={'2015 - 2019'}>
                        <div>
                            <p>honor</p>
                            <ul>
                                <li>...</li>
                            </ul>
                        </div>
                    </Timeline.Item>
                </Timeline>
                {/* 兴趣 */}
                {/* 成就 */}
                {/* 订阅 */}
                {/* 清单(阅读 / 音乐) */}
            </main>
        </Layout>
    );
}
