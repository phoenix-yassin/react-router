import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'


// 这个例子展示了如何在相同的 URL 下渲染两个不同的页面（或者在不同 context 下的两个相同页面）。
// 点击颜色来全屏查看，然后点击「访问Galary」并且在弹窗里查看其他颜色。注意观察弹窗里面
// 的 URL 以及组件和之前是一样的。

class ModalSwitch extends React.Component {

    // 把一个位置（location）传给 <Switch/> 意味着路由会忽略当前的位置，并且使用
    // 被传入 prop 的位置（location）。
    // 「location state」属性使用户在弹窗（modal）里面访问路径「/images/2」，而
    // 不是在主页面上来访问这个路径，而且弹窗页面（modal）会把 gallery 页面挡住。
    // 通常，「/images/2」不会匹配到 gallery 的「/」， 而为了使两个页面都能渲染，我
    // 们要保存之前的位置，并且把这个位置传入Switch，然后就算我们已经转到
    // 「/images/2」这个位置了而Switch会以为当前位置还是「/」。
    preLocation = this.props.location;
    componentWillUpdate(nextProps){
        // 不是modal，则记录preLocation
        if(
            nextProps.history.action !== 'POP' &&
            (!location.state || !location.state.modal)
        ){
            this.preLocation = this.props.location;
        }
    }
    render(){
        const {location} = this.props;
        const isModal = !!(
            location.state && location.state.modal &&
                this.preLocation !== locaiton
        )
        return (
            <div>
                <Switch location={isModal?this.preLocation:location}>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/gellery" component={Gallery}></Route>
                    <Route path="img/:id" componet={ImageView}></Route>
                </Switch>
                {isModal?<Route path="img/:id" component={Modal}/> :null}

            </div>
        )
    }

}
const IMAGES = [
    { id: 0, title: '深兰花紫', color: 'DarkOrchid' },
    { id: 1, title: '石灰绿', color: 'LimeGreen' },
    { id: 2, title: '番茄色', color: 'Tomato' },
    { id: 3, title: '#七八九', color: '#789' },
    { id: 4, title: '赤红色', color: 'Crimson'}
    ]
const Home = ()=>(
    <div>
        <Link to="/gallery">visit Galary </Link>
        <h2>精选图片</ h2 >
        < ul >
            <li ><Link to="/img/2">番茄色</Link></li >
            <li ><Link to="/img/4"> 赤红色</Link></ li >
        </ul >
    </div>
)

const Thumbnail = ({color})=>
    <div style={{width:50,height:50,background:color}}/>
const Gallery = () =>(
    <div>
        {IMAGES.map( i => (
            <Link key={i.id} to={{pathname:`/img/${i.id}`, state:{Modal:true}}}>
                <Thumbnail color={i.color} />
                <p>{i.title}</p>
            </Link>
        ))}
    </div>
)
const Image = ({color}) =>
    <div style={{width:'100%',height:400,background:color}}></div>
const ImageView = ({match}) => {
    const image = IMAGES[parseInt(match.params.id,10)]
    if(!iamge){
        return <div>no images</div>
    }
    return (
        <div>
            <h1>{image.title}</h1>
            <Image color={image.color}></Image>
        </div>
    )
}
const App = () => (
    <Router>
        <Route component={ModalSwitch} />
    </Router>
)

export default App;