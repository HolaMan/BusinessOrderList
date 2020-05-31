import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import posize from "components/posize.v11";
import { commonStyles, shareStyles } from "components/pxConfig.v11";

const Px = posize("div");
const PxFlex = posize("section");

export default class HistoryPage extends Component {
  static inStorybook = true;

  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <Px layout={layouts.group1}>
        <Px layout={layouts.rect3} />
        <Px layout={layouts.img4} />
        <Px layout={layouts.img5} />

        <PxFlex layout={layouts.flexbox56}>
          <Px layout={layouts.group51}>
            <PxFlex layout={layouts.flexbox73}>
              <Px layout={layouts.img13} />
              <div className={css(styles.space75)} />

              <PxFlex layout={layouts.flexbox65}>
                <Px layout={layouts.txt11}>
                  <pre className={css(styles.txt11Content)}>
                    {"Die EOS 90D ist eine DSLR mit Vollausstattung – da…"}
                  </pre>
                </Px>
                <div className={css(styles.space67)} />
                <Px layout={layouts.txt12}>
                  <pre className={css(styles.txt12Content)}>{"3.299,00 $"}</pre>
                </Px>
                <div className={css(styles.space69)} />

                <Px
                  layout={layouts.group62}
                  className="button"
                  onClick={() => {
                    alert("click");
                  }}
                >
                  <Px layout={layouts.rect8} />
                  <Px layout={layouts.txt9}>
                    <pre className={css(styles.txt9Content)}>
                      {"After sale"}
                    </pre>
                  </Px>
                </Px>
              </PxFlex>
            </PxFlex>
          </Px>

          <div className={css(styles.space58)} />

          <Px layout={layouts.group52}>
            <PxFlex layout={layouts.flexbox88}>
              <Px layout={layouts.img21} />
              <div className={css(styles.space90)} />

              <PxFlex layout={layouts.flexbox80}>
                <Px layout={layouts.txt19}>
                  <pre className={css(styles.txt19Content)}>
                    <span className={css(styles.txt19Span0)}>
                      {"Engraved men's sneakers Air Jordan 6 Retro"}
                    </span>
                    <span className={css(styles.txt19Span1)}>{"."}</span>
                  </pre>
                </Px>
                <div className={css(styles.space82)} />
                <Px layout={layouts.txt20}>
                  <pre className={css(styles.txt20Content)}>{"139.00 $"}</pre>
                </Px>
                <div className={css(styles.space84)} />

                <Px layout={layouts.group77}>
                  <Px layout={layouts.rect16} />
                  <Px layout={layouts.txt17}>
                    <pre className={css(styles.txt17Content)}>
                      {"After sale"}
                    </pre>
                  </Px>
                </Px>
              </PxFlex>
            </PxFlex>
          </Px>

          <div className={css(styles.space60)} />

          <Px layout={layouts.group53}>
            <PxFlex layout={layouts.flexbox103}>
              <Px layout={layouts.img29} />
              <div className={css(styles.space105)} />

              <PxFlex layout={layouts.flexbox95}>
                <Px layout={layouts.txt27}>
                  <pre className={css(styles.txt27Content)}>
                    {"RoboMaster S1is the next generation educational robot."}
                  </pre>
                </Px>
                <div className={css(styles.space97)} />
                <Px layout={layouts.txt28}>
                  <pre className={css(styles.txt28Content)}>{"139.00 $"}</pre>
                </Px>
                <div className={css(styles.space99)} />

                <Px layout={layouts.group92}>
                  <Px layout={layouts.rect24} />
                  <Px layout={layouts.txt25}>
                    <pre className={css(styles.txt25Content)}>
                      {"After sale"}
                    </pre>
                  </Px>
                </Px>
              </PxFlex>
            </PxFlex>
          </Px>
        </PxFlex>

        <PxFlex layout={layouts.flexbox157}>
          <PxFlex layout={layouts.flexbox109}>
            <Px layout={layouts.txt39}>
              <pre className={css(styles.txt39Content)}>{"Sun"}</pre>
            </Px>
            <div className={css(styles.space111)} />
            <Px layout={layouts.txt31}>
              <pre className={css(styles.txt31Content)}>{"8"}</pre>
            </Px>
          </PxFlex>

          <div className={css(styles.space159)} />

          <PxFlex layout={layouts.flexbox115}>
            <Px layout={layouts.txt38}>
              <pre className={css(styles.txt38Content)}>{"Mon"}</pre>
            </Px>
            <div className={css(styles.space117)} />
            <Px layout={layouts.txt36}>
              <pre className={css(styles.txt36Content)}>{"9"}</pre>
            </Px>
          </PxFlex>

          <div className={css(styles.space161)} />

          <PxFlex layout={layouts.flexbox121}>
            <Px layout={layouts.txt43}>
              <pre className={css(styles.txt43Content)}>{"Tue"}</pre>
            </Px>
            <div className={css(styles.space123)} />
            <Px layout={layouts.txt37}>
              <pre className={css(styles.txt37Content)}>{"10"}</pre>
            </Px>
          </PxFlex>

          <div className={css(styles.space163)} />

          <PxFlex layout={layouts.flexbox127}>
            <Px layout={layouts.txt44}>
              <pre className={css(styles.txt44Content)}>{"Wed"}</pre>
            </Px>
            <div className={css(styles.space129)} />
            <Px layout={layouts.txt33}>
              <pre className={css(styles.txt33Content)}>{"11"}</pre>
            </Px>
          </PxFlex>

          <div className={css(styles.space165)} />

          <PxFlex layout={layouts.flexbox133}>
            <Px layout={layouts.txt40}>
              <pre className={css(styles.txt40Content)}>{"Thu"}</pre>
            </Px>
            <div className={css(styles.space135)} />
            <Px layout={layouts.txt34}>
              <pre className={css(styles.txt34Content)}>{"12"}</pre>
            </Px>
          </PxFlex>

          <div className={css(styles.space167)} />

          <PxFlex layout={layouts.flexbox146}>
            <Px layout={layouts.txt41}>
              <pre className={css(styles.txt41Content)}>{"Fri"}</pre>
            </Px>
            <div className={css(styles.space148)} />
            <Px layout={layouts.txt35}>
              <pre className={css(styles.txt35Content)}>{"13"}</pre>
            </Px>
          </PxFlex>

          <div className={css(styles.space169)} />

          <PxFlex layout={layouts.flexbox152}>
            <Px layout={layouts.txt42}>
              <pre className={css(styles.txt42Content)}>{"Sat"}</pre>
            </Px>
            <div className={css(styles.space154)} />
            <Px layout={layouts.txt32}>
              <pre className={css(styles.txt32Content)}>{"14"}</pre>
            </Px>
          </PxFlex>
        </PxFlex>

        <Px layout={layouts.txt46}>
          <pre className={css(styles.txt46Content)}>{"Historical order"}</pre>
        </Px>
        <Px layout={layouts.txt48}>
          <pre className={css(styles.txt48Content)}>{"Today"}</pre>
        </Px>
      </Px>
    );
  }
}

const styles = StyleSheet.create({
  group1Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    backgroundColor: `rgb(0,79,250)`
  },
  rect3Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    backgroundColor: `rgb(0,79,250)`,
    borderRadius: `0px 0px 0px 0px`
  },
  img4Body: {
    pointerEvents: `auto`,
    width: `156.4102564102564%`,
    height: `100%`,
    transform: `translate(0px, 0px)`,
    filter: `drop-shadow(-10px 16px 42px rgb(0,107,223))`,
    backgroundImage: `url(${require("assets/ca1ef2fcfb0108d012e6474050ae3bc6.png")})`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`
  },
  img5Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100.32232070910555%`,
    transform: `translate(0px, 0px)`,
    backgroundImage: `url(${require("assets/fc3b3b60c0d8f4c71f2a8f5262b27921.png")})`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`
  },
  flexbox56Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    flexDirection: `column`
  },
  group51Outer: { position: `relative`, flexBasis: 272 },
  group51Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`
  },
  flexbox73Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`
  },
  img13Outer: { position: `relative`, flexShrink: 0, flexBasis: 211 },
  img13Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    filter: `drop-shadow(0px 26px 50px rgba(0,0,0,0.30196078431372547))`,
    backgroundImage: `url(${require("assets/0ab86fa418b53405adae7236443f77d2.png")})`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`
  },
  space75: { position: `relative`, flexShrink: 0, flexBasis: 57 },
  flexbox65Outer: { position: `relative`, flexGrow: 1, flexBasis: 370 },
  flexbox65Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    flexDirection: `column`
  },
  txt11Outer: { position: `relative`, flexShrink: 0, flexBasis: 88 },
  txt11Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    overflow: `visible`
  },
  txt11Content: {
    color: `rgb(51,51,51)`,
    textAlign: `left`,
    letterSpacing: `1px`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `44px`,
    fontSize: `26px`,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    margin: 0,
    userSelect: `text`
  },
  space67: { position: `relative`, flexShrink: 0, flexBasis: 30 },
  txt12Outer: { position: `relative`, flexShrink: 0, flexBasis: `auto` },
  txt12Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    overflow: `visible`
  },
  txt12Content: {
    color: `rgb(51,51,51)`,
    textAlign: `left`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `47.599999999999994px`,
    fontSize: `34px`,
    fontWeight: 700,
    fontStyle: `italic`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  space69: { position: `relative`, flexShrink: 0, flexBasis: 33 },
  group62Outer: { position: `relative`, flexBasis: 54 },
  group62Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`
  },
  rect8Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    backgroundColor: `rgb(0,80,250)`,
    borderRadius: `8px 8px 8px 8px`,
    boxShadow: `0px 26px 38px -20px rgb(92,136,233)`
  },
  txt9Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    justifyContent: `center`,
    overflow: `visible`
  },
  txt9Content: {
    color: `rgb(255,255,255)`,
    textAlign: `center`,
    letterSpacing: `1px`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `28px`,
    fontSize: `20px`,
    fontWeight: 500,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  space58: { position: `relative`, flexShrink: 0, flexBasis: 30 },
  group52Outer: { position: `relative`, flexBasis: 300 },
  group52Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`
  },
  flexbox88Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`
  },
  img21Outer: { position: `relative`, flexShrink: 0, flexBasis: 219 },
  img21Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    filter: `drop-shadow(0px 26px 50px rgba(0,0,0,0.2))`,
    backgroundImage: `url(${require("assets/c353e16951b89d649d7d7e3ea775d808.png")})`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`
  },
  space90: { position: `relative`, flexShrink: 0, flexBasis: 65 },
  flexbox80Outer: { position: `relative`, flexGrow: 1, flexBasis: 370 },
  flexbox80Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    flexDirection: `column`
  },
  txt19Outer: { position: `relative`, flexShrink: 0, flexBasis: 88 },
  txt19Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    overflow: `visible`
  },
  txt19Content: {
    color: `rgb(51,51,51)`,
    textAlign: `left`,
    letterSpacing: `1px`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `44px`,
    fontSize: `26px`,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    margin: 0,
    userSelect: `text`
  },
  txt19Span0: {
    color: `#333333ff`,
    letterSpacing: `1px`,
    lineHeight: `44px`,
    fontSize: `26px`,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`
  },
  txt19Span1: {
    color: `#333333ff`,
    letterSpacing: `1px`,
    lineHeight: `44px`,
    fontSize: `26px`,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"PingFangSC", Helvetica, Arial, serif`
  },
  space82: { position: `relative`, flexShrink: 0, flexBasis: 30 },
  txt20Outer: { position: `relative`, flexShrink: 0, flexBasis: `auto` },
  txt20Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    overflow: `visible`
  },
  txt20Content: {
    color: `rgb(51,51,51)`,
    textAlign: `left`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `47.599999999999994px`,
    fontSize: `34px`,
    fontWeight: 700,
    fontStyle: `italic`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  space84: { position: `relative`, flexShrink: 0, flexBasis: 33 },
  group77Outer: { position: `relative`, flexBasis: 54 },
  group77Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`
  },
  rect16Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    backgroundColor: `rgb(0,80,250)`,
    borderRadius: `8px 8px 8px 8px`,
    boxShadow: `0px 26px 38px -20px rgb(92,136,233)`
  },
  txt17Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    justifyContent: `center`,
    overflow: `visible`
  },
  txt17Content: {
    color: `rgb(255,255,255)`,
    textAlign: `center`,
    letterSpacing: `1px`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `28px`,
    fontSize: `20px`,
    fontWeight: 500,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  space60: { position: `relative`, flexShrink: 0, flexBasis: 11 },
  group53Outer: { position: `relative`, flexBasis: 319 },
  group53Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`
  },
  flexbox103Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`
  },
  img29Outer: { position: `relative`, flexShrink: 0, flexBasis: 221 },
  img29Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    filter: `drop-shadow(0px 26px 50px rgba(0,0,0,0.30196078431372547))`,
    backgroundImage: `url(${require("assets/1350a89a3a68adb99cdb4792717e3b71.png")})`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`
  },
  space105: { position: `relative`, flexShrink: 0, flexBasis: 54 },
  flexbox95Outer: { position: `relative`, flexGrow: 1, flexBasis: 370 },
  flexbox95Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    flexDirection: `column`
  },
  txt27Outer: { position: `relative`, flexShrink: 0, flexBasis: 88 },
  txt27Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    overflow: `visible`
  },
  txt27Content: {
    color: `rgb(51,51,51)`,
    textAlign: `left`,
    letterSpacing: `1px`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `44px`,
    fontSize: `26px`,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    margin: 0,
    userSelect: `text`
  },
  space97: { position: `relative`, flexShrink: 0, flexBasis: 30 },
  txt28Outer: { position: `relative`, flexShrink: 0, flexBasis: `auto` },
  txt28Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    overflow: `visible`
  },
  txt28Content: {
    color: `rgb(51,51,51)`,
    textAlign: `left`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `47.599999999999994px`,
    fontSize: `34px`,
    fontWeight: 700,
    fontStyle: `italic`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  space99: { position: `relative`, flexShrink: 0, flexBasis: 33 },
  group92Outer: { position: `relative`, flexBasis: 54 },
  group92Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`
  },
  rect24Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    backgroundColor: `rgba(169,172,193,0.2)`,
    borderRadius: `8px 8px 8px 8px`
  },
  txt25Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    justifyContent: `center`,
    overflow: `visible`
  },
  txt25Content: {
    color: `rgb(169,172,193)`,
    textAlign: `center`,
    letterSpacing: `1px`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `28px`,
    fontSize: `20px`,
    fontWeight: 500,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  flexbox157Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`
  },
  flexbox109Outer: { position: `relative`, flexBasis: 36 },
  flexbox109Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    flexDirection: `column`
  },
  txt39Outer: { position: `relative`, flexShrink: 0, flexBasis: `auto` },
  txt39Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    justifyContent: `center`,
    overflow: `visible`
  },
  txt39Content: {
    color: `rgb(127,167,255)`,
    textAlign: `center`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `40px`,
    fontSize: `20px`,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  space111: { position: `relative`, flexShrink: 0, flexBasis: 10 },
  txt31Outer: { position: `relative`, flexShrink: 0, flexBasis: `auto` },
  txt31Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    justifyContent: `center`,
    overflow: `visible`
  },
  txt31Content: {
    color: `rgb(127,167,255)`,
    textAlign: `center`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `40px`,
    fontSize: `24px`,
    fontWeight: 700,
    fontStyle: `normal`,
    fontFamily: `"DINAlternate", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  space159: { position: `relative`, flexGrow: 1, flexBasis: 68.5 },
  flexbox115Outer: { position: `relative`, flexBasis: 39 },
  flexbox115Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    flexDirection: `column`
  },
  txt38Outer: { position: `relative`, flexShrink: 0, flexBasis: `auto` },
  txt38Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    justifyContent: `center`,
    overflow: `visible`
  },
  txt38Content: {
    color: `rgb(127,167,255)`,
    textAlign: `center`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `40px`,
    fontSize: `20px`,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  space117: { position: `relative`, flexShrink: 0, flexBasis: 10 },
  txt36Outer: { position: `relative`, flexShrink: 0, flexBasis: `auto` },
  txt36Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    opacity: 0.9,
    display: `flex`,
    justifyContent: `center`,
    overflow: `visible`
  },
  txt36Content: {
    color: `rgb(127,167,255)`,
    textAlign: `center`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `40px`,
    fontSize: `24px`,
    fontWeight: 700,
    fontStyle: `normal`,
    fontFamily: `"DINAlternate", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  space161: { position: `relative`, flexGrow: 1, flexBasis: 66.5 },
  flexbox121Outer: { position: `relative`, flexBasis: 41 },
  flexbox121Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    flexDirection: `column`
  },
  txt43Outer: { position: `relative`, flexShrink: 0, flexBasis: `auto` },
  txt43Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    opacity: 0.9,
    display: `flex`,
    justifyContent: `center`,
    overflow: `visible`
  },
  txt43Content: {
    color: `rgb(0,79,250)`,
    textAlign: `center`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `40px`,
    fontSize: `24px`,
    fontWeight: 500,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  space123: { position: `relative`, flexShrink: 0, flexBasis: 10 },
  txt37Outer: { position: `relative`, flexShrink: 0, flexBasis: `auto` },
  txt37Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    justifyContent: `center`,
    overflow: `visible`
  },
  txt37Content: {
    color: `rgb(0,79,250)`,
    textAlign: `center`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `40px`,
    fontSize: `34px`,
    fontWeight: 700,
    fontStyle: `normal`,
    fontFamily: `"DINAlternate", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  space163: { position: `relative`, flexGrow: 1, flexBasis: 65.5 },
  flexbox127Outer: { position: `relative`, flexBasis: 41 },
  flexbox127Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    flexDirection: `column`
  },
  txt44Outer: { position: `relative`, flexShrink: 0, flexBasis: `auto` },
  txt44Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    justifyContent: `center`,
    overflow: `visible`
  },
  txt44Content: {
    color: `rgb(127,167,255)`,
    textAlign: `center`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `40px`,
    fontSize: `20px`,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  space129: { position: `relative`, flexShrink: 0, flexBasis: 10 },
  txt33Outer: { position: `relative`, flexShrink: 0, flexBasis: `auto` },
  txt33Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    justifyContent: `center`,
    overflow: `visible`
  },
  txt33Content: {
    color: `rgb(127,167,255)`,
    textAlign: `center`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `40px`,
    fontSize: `24px`,
    fontWeight: 700,
    fontStyle: `normal`,
    fontFamily: `"DINAlternate", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  space165: { position: `relative`, flexGrow: 1, flexBasis: 68 },
  flexbox133Outer: { position: `relative`, flexBasis: 35 },
  flexbox133Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    flexDirection: `column`
  },
  txt40Outer: { position: `relative`, flexShrink: 0, flexBasis: `auto` },
  txt40Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    justifyContent: `center`,
    overflow: `visible`
  },
  txt40Content: {
    color: `rgb(127,167,255)`,
    textAlign: `center`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `40px`,
    fontSize: `20px`,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  space135: { position: `relative`, flexShrink: 0, flexBasis: 10 },
  txt34Outer: { position: `relative`, flexShrink: 0, flexBasis: `auto` },
  txt34Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    justifyContent: `center`,
    overflow: `visible`
  },
  txt34Content: {
    color: `rgb(127,167,255)`,
    textAlign: `center`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `40px`,
    fontSize: `24px`,
    fontWeight: 700,
    fontStyle: `normal`,
    fontFamily: `"DINAlternate", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  space167: { position: `relative`, flexGrow: 1, flexBasis: 66 },
  flexbox146Outer: { position: `relative`, flexBasis: 27 },
  flexbox146Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    flexDirection: `column`
  },
  txt41Outer: { position: `relative`, flexShrink: 0, flexBasis: `auto` },
  txt41Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    justifyContent: `center`,
    overflow: `visible`
  },
  txt41Content: {
    color: `rgb(127,167,255)`,
    textAlign: `center`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `40px`,
    fontSize: `20px`,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  space148: { position: `relative`, flexShrink: 0, flexBasis: 10 },
  txt35Outer: { position: `relative`, flexShrink: 0, flexBasis: `auto` },
  txt35Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    justifyContent: `center`,
    overflow: `visible`
  },
  txt35Content: {
    color: `rgb(127,167,255)`,
    textAlign: `center`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `40px`,
    fontSize: `24px`,
    fontWeight: 700,
    fontStyle: `normal`,
    fontFamily: `"DINAlternate", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  space169: { position: `relative`, flexGrow: 1, flexBasis: 67 },
  flexbox152Outer: { position: `relative`, flexBasis: 31 },
  flexbox152Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    flexDirection: `column`
  },
  txt42Outer: { position: `relative`, flexShrink: 0, flexBasis: `auto` },
  txt42Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    justifyContent: `center`,
    overflow: `visible`
  },
  txt42Content: {
    color: `rgb(127,167,255)`,
    textAlign: `center`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `40px`,
    fontSize: `20px`,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  space154: { position: `relative`, flexShrink: 0, flexBasis: 10 },
  txt32Outer: { position: `relative`, flexShrink: 0, flexBasis: `auto` },
  txt32Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    justifyContent: `center`,
    overflow: `visible`
  },
  txt32Content: {
    color: `rgb(127,167,255)`,
    textAlign: `center`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `40px`,
    fontSize: `24px`,
    fontWeight: 700,
    fontStyle: `normal`,
    fontFamily: `"DINAlternate", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  txt46Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    justifyContent: `center`,
    overflow: `visible`
  },
  txt46Content: {
    color: `rgb(255,255,255)`,
    textAlign: `center`,
    letterSpacing: `1px`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `39.199999999999996px`,
    fontSize: `28px`,
    fontWeight: 200,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  txt48Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    overflow: `visible`
  },
  txt48Content: {
    color: `rgb(255,255,255)`,
    textAlign: `left`,
    letterSpacing: `1px`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `67.19999999999999px`,
    fontSize: `48px`,
    fontWeight: 700,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  }
});

const layouts = {
  rect3: {
    absolute: true,
    xy: [["750px"], ["1624px"]],
    className: css(styles.rect3Body)
  },
  img4: {
    absolute: true,
    nop: true,
    areaStyle: {},
    xy: [["438px", "312px", "0fr"], ["0px", "330px", "1294fr"]],
    className: css(styles.img4Body)
  },
  img5: {
    absolute: true,
    nop: true,
    areaStyle: {},
    xy: [["750px"], ["383px", "1241px", "0fr"]],
    className: css(styles.img5Body)
  },
  img13: {
    nop: true,
    areaStyle: {},
    xy: [["211px"], ["0px", "161px", "111fr"]],
    className: css(styles.img13Body),
    outerClassName: css(styles.img13Outer)
  },
  txt11: {
    xy: [["minmax(0px,370fr)"], ["0px", "minmax(88px,auto)", "1fr"]],
    className: css(styles.txt11Body),
    outerClassName: css(styles.txt11Outer)
  },
  txt12: {
    xy: [
      ["0px", "minmax(161px,auto)", "209fr"],
      ["0px", "minmax(47px,auto)", "1fr"]
    ],
    className: css(styles.txt12Body),
    outerClassName: css(styles.txt12Outer)
  },
  rect8: {
    absolute: true,
    xy: [["minmax(0px,162fr)"], ["minmax(54px,54fr)"]],
    className: css(styles.rect8Body)
  },
  txt9: {
    absolute: true,
    xy: [["34fr", "95px", "33fr"], ["16fr", "minmax(28px,auto)", "10px"]],
    className: css(styles.txt9Body)
  },
  group62: {
    xy: [["0fr", "162px", "208fr"], ["54px"]],
    className: css(styles.group62Body),
    outerClassName: css(styles.group62Outer)
  },
  flexbox65: {
    xy: [["370px"], ["20px", "minmax(252px,252fr)", "0fr"]],
    className: css(styles.flexbox65Body),
    outerClassName: css(styles.flexbox65Outer)
  },
  flexbox73: {
    xy: [["minmax(0px,638fr)"], ["minmax(272px,272fr)"]],
    className: css(styles.flexbox73Body)
  },
  group51: {
    xy: [["62px", "minmax(0px,638fr)", "50px"], ["272px"]],
    className: css(styles.group51Body),
    outerClassName: css(styles.group51Outer)
  },
  img21: {
    nop: true,
    areaStyle: {},
    xy: [["219px"], ["0px", "minmax(205px,205fr)", "95fr"]],
    className: css(styles.img21Body),
    outerClassName: css(styles.img21Outer)
  },
  txt19: {
    xy: [["minmax(0px,370fr)"], ["0px", "minmax(88px,auto)", "1fr"]],
    className: css(styles.txt19Body),
    outerClassName: css(styles.txt19Outer)
  },
  txt20: {
    xy: [
      ["0px", "minmax(133px,auto)", "237fr"],
      ["0px", "minmax(47px,auto)", "1fr"]
    ],
    className: css(styles.txt20Body),
    outerClassName: css(styles.txt20Outer)
  },
  rect16: {
    absolute: true,
    xy: [["minmax(0px,162fr)"], ["minmax(54px,54fr)"]],
    className: css(styles.rect16Body)
  },
  txt17: {
    absolute: true,
    xy: [["34fr", "95px", "33fr"], ["16fr", "minmax(28px,auto)", "10px"]],
    className: css(styles.txt17Body)
  },
  group77: {
    xy: [["0fr", "162px", "208fr"], ["54px"]],
    className: css(styles.group77Body),
    outerClassName: css(styles.group77Outer)
  },
  flexbox80: {
    xy: [["370px"], ["48px", "minmax(252px,252fr)", "0fr"]],
    className: css(styles.flexbox80Body),
    outerClassName: css(styles.flexbox80Outer)
  },
  flexbox88: {
    xy: [["minmax(0px,654fr)"], ["minmax(300px,300fr)"]],
    className: css(styles.flexbox88Body)
  },
  group52: {
    xy: [["46px", "minmax(0px,654fr)", "50px"], ["300px"]],
    className: css(styles.group52Body),
    outerClassName: css(styles.group52Outer)
  },
  img29: {
    nop: true,
    areaStyle: {},
    xy: [["221px"], ["0px", "minmax(236px,236fr)", "83fr"]],
    className: css(styles.img29Body),
    outerClassName: css(styles.img29Outer)
  },
  txt27: {
    xy: [["minmax(0px,370fr)"], ["0px", "minmax(88px,auto)", "1fr"]],
    className: css(styles.txt27Body),
    outerClassName: css(styles.txt27Outer)
  },
  txt28: {
    xy: [
      ["0px", "minmax(133px,auto)", "237fr"],
      ["0px", "minmax(47px,auto)", "1fr"]
    ],
    className: css(styles.txt28Body),
    outerClassName: css(styles.txt28Outer)
  },
  rect24: {
    absolute: true,
    xy: [["minmax(0px,162fr)"], ["minmax(54px,54fr)"]],
    className: css(styles.rect24Body)
  },
  txt25: {
    absolute: true,
    xy: [["34fr", "95px", "33fr"], ["16fr", "minmax(28px,auto)", "10px"]],
    className: css(styles.txt25Body)
  },
  group92: {
    xy: [["0fr", "162px", "208fr"], ["54px"]],
    className: css(styles.group92Body),
    outerClassName: css(styles.group92Outer)
  },
  flexbox95: {
    xy: [["370px"], ["67px", "minmax(252px,252fr)", "0fr"]],
    className: css(styles.flexbox95Body),
    outerClassName: css(styles.flexbox95Outer)
  },
  flexbox103: {
    xy: [["minmax(0px,645fr)"], ["minmax(319px,319fr)"]],
    className: css(styles.flexbox103Body)
  },
  group53: {
    xy: [["55px", "minmax(0px,645fr)", "50px"], ["319px"]],
    className: css(styles.group53Body),
    outerClassName: css(styles.group53Outer)
  },
  flexbox56: {
    absolute: true,
    xy: [["minmax(0px,750fr)"], ["600px", "932px", "92fr"]],
    className: css(styles.flexbox56Body)
  },
  txt39: {
    xy: [["1fr", "36px", "1fr"], ["0px", "minmax(40px,auto)", "1fr"]],
    className: css(styles.txt39Body),
    outerClassName: css(styles.txt39Outer)
  },
  txt31: {
    xy: [["11fr", "14px", "11fr"], ["1fr", "minmax(40px,auto)", "0px"]],
    className: css(styles.txt31Body),
    outerClassName: css(styles.txt31Outer)
  },
  flexbox109: {
    xy: [["36px"], ["minmax(90px,90fr)"]],
    className: css(styles.flexbox109Body),
    outerClassName: css(styles.flexbox109Outer)
  },
  txt38: {
    xy: [["1fr", "39px", "1fr"], ["0px", "minmax(40px,auto)", "1fr"]],
    className: css(styles.txt38Body),
    outerClassName: css(styles.txt38Outer)
  },
  txt36: {
    xy: [["13fr", "14px", "13fr"], ["1fr", "minmax(40px,auto)", "0px"]],
    className: css(styles.txt36Body),
    outerClassName: css(styles.txt36Outer)
  },
  flexbox115: {
    xy: [["39px"], ["minmax(90px,90fr)"]],
    className: css(styles.flexbox115Body),
    outerClassName: css(styles.flexbox115Outer)
  },
  txt43: {
    xy: [["1fr", "41px", "1fr"], ["0px", "minmax(40px,auto)", "1fr"]],
    className: css(styles.txt43Body),
    outerClassName: css(styles.txt43Outer)
  },
  txt37: {
    xy: [["2fr", "38px", "2fr"], ["1fr", "minmax(40px,auto)", "0px"]],
    className: css(styles.txt37Body),
    outerClassName: css(styles.txt37Outer)
  },
  flexbox121: {
    xy: [["41px"], ["minmax(90px,90fr)"]],
    className: css(styles.flexbox121Body),
    outerClassName: css(styles.flexbox121Outer)
  },
  txt44: {
    xy: [["1fr", "41px", "1fr"], ["0px", "minmax(40px,auto)", "1fr"]],
    className: css(styles.txt44Body),
    outerClassName: css(styles.txt44Outer)
  },
  txt33: {
    xy: [["8fr", "26px", "8fr"], ["1fr", "minmax(40px,auto)", "0px"]],
    className: css(styles.txt33Body),
    outerClassName: css(styles.txt33Outer)
  },
  flexbox127: {
    xy: [["41px"], ["minmax(90px,90fr)"]],
    className: css(styles.flexbox127Body),
    outerClassName: css(styles.flexbox127Outer)
  },
  txt40: {
    xy: [["1fr", "35px", "1fr"], ["0px", "minmax(40px,auto)", "1fr"]],
    className: css(styles.txt40Body),
    outerClassName: css(styles.txt40Outer)
  },
  txt34: {
    xy: [["4fr", "27px", "4fr"], ["1fr", "minmax(40px,auto)", "0px"]],
    className: css(styles.txt34Body),
    outerClassName: css(styles.txt34Outer)
  },
  flexbox133: {
    xy: [["35px"], ["minmax(90px,90fr)"]],
    className: css(styles.flexbox133Body),
    outerClassName: css(styles.flexbox133Outer)
  },
  txt41: {
    xy: [
      ["1fr", "1px", "24px", "0px", "1fr"],
      ["0px", "minmax(40px,auto)", "1fr"]
    ],
    className: css(styles.txt41Body),
    outerClassName: css(styles.txt41Outer)
  },
  txt35: {
    xy: [["1fr", "27px", "1fr"], ["1fr", "minmax(40px,auto)", "0px"]],
    className: css(styles.txt35Body),
    outerClassName: css(styles.txt35Outer)
  },
  flexbox146: {
    xy: [["27px"], ["minmax(90px,90fr)"]],
    className: css(styles.flexbox146Body),
    outerClassName: css(styles.flexbox146Outer)
  },
  txt42: {
    xy: [["1fr", "31px", "1fr"], ["0px", "minmax(40px,auto)", "1fr"]],
    className: css(styles.txt42Body),
    outerClassName: css(styles.txt42Outer)
  },
  txt32: {
    xy: [["2fr", "27px", "2fr"], ["1fr", "minmax(40px,auto)", "0px"]],
    className: css(styles.txt32Body),
    outerClassName: css(styles.txt32Outer)
  },
  flexbox152: {
    xy: [["31px"], ["minmax(90px,90fr)"]],
    className: css(styles.flexbox152Body),
    outerClassName: css(styles.flexbox152Outer)
  },
  flexbox157: {
    absolute: true,
    xy: [["49px", "minmax(0px,652fr)", "50px"], ["395px", "90px", "1139fr"]],
    className: css(styles.flexbox157Body)
  },
  txt46: {
    absolute: true,
    xy: [
      ["52px", "minmax(205px,auto)", "494fr"],
      ["229px", "minmax(39px,auto)", "1356fr"]
    ],
    className: css(styles.txt46Body)
  },
  txt48: {
    absolute: true,
    xy: [
      ["50px", "minmax(143px,auto)", "557fr"],
      ["276px", "minmax(67px,auto)", "1281fr"]
    ],
    className: css(styles.txt48Body)
  },
  group1: {
    nop: true,
    trackStyle: { overflow: "auto" },
    areaStyle: { overflow: "hidden" },
    xy: [["minmax(0px,750fr)"], ["1624px"]],
    className: css(styles.group1Body)
  }
};
