import Footer from 'next/footer'

function LinkListItem(props) {
    const link = props.link
    return <li>{link.name}</li>
}

function Linklist(props) {
    const linkList = props.linkList
    const listItems = linkList.map((link) =>
        <LinkListItem key={link.id.toString()} link={link} />
    )
    return <ul>{listItems}</ul>
}
// 首页底部组件
export default function Footer() {
    const linkList = [
        { id: 1, name: 'zs'  },
        { id: 2, name: 'ls'  },
        { id: 3, name: 'ww'  },
        { id: 4, name: 'zl'  },
    ]
    return (
        <>
            {/* Footer 标签，添加背景色，设置上下padding */}
            <Footer>
                {/* 包裹的外层盒子，设置宽度、左右padding和左右 margin: auto */}
                <div>
                    {/* 包裹内容的盒子 */}
                    <div>
                        {/* 左侧包含logo、友链盒子，设置宽度 */}
                        <section>
                            <Logo styleOption={{ round_width: 31, B_width: 22, lbank_width: 50 }} />
                            <p>Copyright © 2022 Facebook Inc.</p>
                            <Linklist linkList={linkList} />
                        </section>
                        {/* 右侧链接盒子,设置宽度及与左边盒子的边距 */}
                        <div></div>
                    </div>
                </div>
            </Footer>
        </>
    )
}