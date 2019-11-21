import React, { useState, Component } from "react"
import styles from "./index.modules.css"
export default class AlertSwiper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: false,
            imgUrl: props.imgAll[0].imgUrl,
            activeImg: 0,
            flagLog: false,
            width: 0,
            height: 0,
            scalebig: 1,
            rotate: 0
        }
    }
    componentDidMount() {
        const { children } = this.props
        let img = new Image()
        img.src = children.length > 0 && children[0].props.src
        img.onload = (e) => {
            img.onload = null
            this.setState({
                width: e.target.width,
                height: e.target.height,
                flagLog: true
            })
        }
    }
    shouImg = (e) => {
        e.stopPropagation()
        this.setState({ flag: true})
    }
    hide = (e) => {
        e.stopPropagation()
        this.setState({flag: false})
}
    render() {
        const { children, imgAll } = this.props
        const {
            imgUrl,
            flag,
            flagLog,
            width,
            height,
            activeImg,
            scalebig,
            rotate
        } = this.state;
        return (<div>
            <div onClick={e => { this.shouImg(e) }}>
                {children}
            </div>
            {
                flag
                && flagLog
                && <div className={styles.mack} onClick={(e) => { this.hide(e) }}>
                    <img
                        className={styles.imgStyle}
                        src={imgUrl}
                        style={{ transform: 'scale(' + scalebig + ') rotate(' + rotate + 'deg)' }}
                        width={width}
                        height={height}
                        onClick={e => e.stopPropagation()}
                        alt="" />
                    <ul className={styles.control} onClick={e => e.stopPropagation()} >
                        <li className={styles.reduse} onClick={
                            (e) => {
                                e.stopPropagation()
                                if (scalebig < 2) {
                                    this.setState({
                                        scalebig: scalebig + 0.5
                                    })
                                }
                            }
                        }> 放大</li>
                        <li className={styles.reduse} onClick={(e) => {
                            e.stopPropagation()

                            if (scalebig > 0.5) {
                                this.setState({
                                    scalebig: scalebig - 0.2
                                })
                            }
                        }}>缩小</li>
                        <li className={styles.reduse} onClick={
                            (e) => {
                                e.stopPropagation()

                                this.setState({
                                    scalebig: 1,
                                    rotate: 0
                                })
                            }
                        } >复原</li>
                        <li className={styles.reduse} onClick={(e) => {
                            e.stopPropagation()
                            if (rotate == -360) {
                                this.setState({
                                    rotate: -90
                                })
                            } else {
                                this.setState({
                                    rotate: rotate - 90
                                })
                            }
                        }}>左转</li>
                        <li className={styles.reduse} onClick={(e) => {
                            e.stopPropagation()

                            if (rotate == 360) {
                                this.setState({
                                    rotate: 90
                                })
                            } else {
                                this.setState({
                                    rotate: rotate + 90
                                })
                            }
                        }}>右转</li>
                    </ul>
                    <div className={styles.button} onClick={e => e.stopPropagation()}>
                        <ul className={styles.buttonContent}>
                            {
                                imgAll.map((item, i) => {
                                    return (<li className={activeImg === i ? styles.activeImg : ""} key={i} onClick={() => {
                                        this.setState({
                                            activeImg: i,
                                            imgUrl: item.imgUrl
                                        })
                                    }}>
                                        <img className={styles.buttonContentLiImg} src={item.imgUrl} alt="" />
                                    </li>)
                                })
                            }
                        </ul>
                    </div>
                </div>
            }
        </div>)
    }
}
