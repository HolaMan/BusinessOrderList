import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import posize from 'components/posize.v11';
import { commonStyles, shareStyles } from 'components/pxConfig.v11';

const Px = posize('div');
const PxFlex = posize('section');

export default class OrderPage extends Component {
  static inStorybook = true;

  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <Px layout={layouts.group1}>
        <Px layout={layouts.img3} />

        <Px layout={layouts.group46}>
          <Px layout={layouts.backgroundRect4} />

          <PxFlex layout={layouts.foregroundGroupFlexbox74}>
            <div className={css(styles.space75)} />

            <PxFlex layout={layouts.flexbox100}>
              <div className={css(styles.space101)} />
              <Px layout={layouts.img15} />
              <div className={css(styles.space103)} />
              <Px layout={layouts.txt13}>
                <pre className={css(styles.txt13Content)}>
                  {'Shipped, serviced by supplier.'}
                </pre>
              </Px>
              <div className={css(styles.space105)} />
            </PxFlex>

            <div className={css(styles.space79)} />
            <Px layout={layouts.txt14}>
              <pre className={css(styles.txt14Content)}>
                {'May 10, 2020 12:34'}
              </pre>
            </Px>
            <div className={css(styles.space81)} />

            <PxFlex layout={layouts.flexbox107}>
              <div className={css(styles.space108)} />
              <Px layout={layouts.img19} />
              <div className={css(styles.space110)} />
              <Px layout={layouts.txt17}>
                <pre className={css(styles.txt17Content)}>
                  {'R & D Center Group.'}
                </pre>
              </Px>
              <div className={css(styles.space112)} />
            </PxFlex>

            <div className={css(styles.space85)} />
            <Px layout={layouts.txt18}>
              <pre className={css(styles.txt18Content)}>
                {'Xuanwu District, Nanjing City'}
              </pre>
            </Px>
            <div className={css(styles.space87)} />

            <Px layout={layouts.coverGroupGroup52}>
              <Px layout={layouts.backgroundRect24} />

              <PxFlex layout={layouts.foregroundGroupFlexbox121}>
                <div className={css(styles.space122)} />
                <Px layout={layouts.img26} />
                <div className={css(styles.space124)} />

                <PxFlex layout={layouts.flexbox158}>
                  <div className={css(styles.space159)} />
                  <Px layout={layouts.txt27}>
                    <pre className={css(styles.txt27Content)}>
                      {'Iphone 11 PRO Breakthrough three-camera system with  …'}
                    </pre>
                  </Px>
                  <div className={css(styles.space161)} />
                  <Px layout={layouts.txt28}>
                    <pre className={css(styles.txt28Content)}>{'799.00 $'}</pre>
                  </Px>
                  <div className={css(styles.space163)} />
                </PxFlex>

                <div className={css(styles.space128)} />
              </PxFlex>
            </Px>

            <div className={css(styles.space89)} />

            <Px layout={layouts.coverGroupGroup60}>
              <Px layout={layouts.backgroundRect42} />

              <PxFlex layout={layouts.foregroundGroupFlexbox130}>
                <div className={css(styles.space131)} />
                <Px layout={layouts.txt43}>
                  <pre className={css(styles.txt43Content)}>
                    {'payment method'}
                  </pre>
                </Px>
                <div className={css(styles.space133)} />
                <Px layout={layouts.txt44}>
                  <pre className={css(styles.txt44Content)}>
                    {'Online payment'}
                  </pre>
                </Px>
                <div className={css(styles.space135)} />
              </PxFlex>
            </Px>

            <Px layout={layouts.coverGroupGroup54}>
              <Px layout={layouts.backgroundRect30} />

              <PxFlex layout={layouts.foregroundGroupFlexbox137}>
                <div className={css(styles.space138)} />
                <Px layout={layouts.txt31}>
                  <pre className={css(styles.txt31Content)}>{'Amount'}</pre>
                </Px>
                <div className={css(styles.space140)} />
                <Px layout={layouts.txt32}>
                  <pre className={css(styles.txt32Content)}>{'799.00 $'}</pre>
                </Px>
                <div className={css(styles.space142)} />
              </PxFlex>
            </Px>

            <Px layout={layouts.coverGroupGroup58}>
              <Px layout={layouts.backgroundRect38} />

              <PxFlex layout={layouts.foregroundGroupFlexbox144}>
                <div className={css(styles.space145)} />
                <Px layout={layouts.txt39}>
                  <pre className={css(styles.txt39Content)}>{'Freight'}</pre>
                </Px>
                <div className={css(styles.space147)} />
                <Px layout={layouts.txt40}>
                  <pre className={css(styles.txt40Content)}>{'5.00 $'}</pre>
                </Px>
                <div className={css(styles.space149)} />
              </PxFlex>
            </Px>

            <Px layout={layouts.coverGroupGroup56}>
              <Px layout={layouts.backgroundRect34} />

              <PxFlex layout={layouts.foregroundGroupFlexbox151}>
                <div className={css(styles.space152)} />
                <Px layout={layouts.txt35}>
                  <pre className={css(styles.txt35Content)}>
                    {'The actual amount'}
                  </pre>
                </Px>
                <div className={css(styles.space154)} />
                <Px layout={layouts.txt36}>
                  <pre className={css(styles.txt36Content)}>{'806.00 $'}</pre>
                </Px>
                <div className={css(styles.space156)} />
              </PxFlex>
            </Px>

            <div className={css(styles.space94)} />

            <PxFlex layout={layouts.flexbox114}>
              <div className={css(styles.space115)} />

              <Px layout={layouts.coverGroupGroup50}>
                <Px layout={layouts.rect10} />
                <Px layout={layouts.txt11}>
                  <pre className={css(styles.txt11Content)}>
                    {'Cancel order'}
                  </pre>
                </Px>
              </Px>

              <div className={css(styles.space117)} />

              <Px layout={layouts.coverGroupGroup48}>
                <Px layout={layouts.rect7} />
                <Px layout={layouts.txt8}>
                  <pre className={css(styles.txt8Content)}>
                    {'Historical order'}
                  </pre>
                </Px>
              </Px>

              <div className={css(styles.space119)} />
            </PxFlex>

            <div className={css(styles.space98)} />
          </PxFlex>
        </Px>

        <Px layout={layouts.txt21}>
          <pre className={css(styles.txt21Content)}>
            {'Successful purchase'}
          </pre>
        </Px>
        <Px layout={layouts.txt22}>
          <pre className={css(styles.txt22Content)}>
            {'We will stock up for you as soon as possible.'}
          </pre>
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
  img3Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    backgroundImage: `url(${require('assets/72ddcdd1f3c1bf761eb52f14dbbfa38e.png')})`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`,
    borderRadius: `0px 0px 0px 0px`
  },
  group46Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`
  },
  backgroundRect4Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    backgroundColor: `rgb(255,255,255)`,
    borderRadius: `0px 56px 0px 0px`
  },
  foregroundGroupFlexbox74Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    flexDirection: `column`
  },
  space75: { position: `relative`, flexShrink: 0, flexBasis: 70 },
  flexbox100Outer: { position: `relative`, flexBasis: 44 },
  flexbox100Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`
  },
  space101: { position: `relative`, flexShrink: 0, flexBasis: 47 },
  img15Outer: { position: `relative`, flexBasis: 22 },
  img15Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    backgroundImage: `url(${require('assets/3bb34b0e8177e2c696a67e7a48da50e4.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`
  },
  space103: { position: `relative`, flexShrink: 0, flexBasis: 21 },
  txt13Outer: { position: `relative`, flexShrink: 0, flexBasis: `auto` },
  txt13Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    overflow: `visible`
  },
  txt13Content: {
    color: `rgb(51,51,51)`,
    textAlign: `left`,
    letterSpacing: `1px`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `44px`,
    fontSize: `28px`,
    fontWeight: 700,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  space105: { position: `relative`, flexGrow: 1, flexBasis: 226 },
  space79: { position: `relative`, flexShrink: 0, flexBasis: 18 },
  txt14Outer: { position: `relative`, flexShrink: 0, flexBasis: `auto` },
  txt14Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    overflow: `visible`
  },
  txt14Content: {
    color: `rgb(169,172,193)`,
    textAlign: `left`,
    letterSpacing: `1px`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `39.199999999999996px`,
    fontSize: `28px`,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  space81: { position: `relative`, flexShrink: 0, flexBasis: 34 },
  flexbox107Outer: { position: `relative`, flexBasis: 44 },
  flexbox107Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`
  },
  space108: { position: `relative`, flexShrink: 0, flexBasis: 47 },
  img19Outer: { position: `relative`, flexBasis: 22 },
  img19Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    backgroundImage: `url(${require('assets/b2b9e79c27c631c04e984790e96f9b97.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`
  },
  space110: { position: `relative`, flexShrink: 0, flexBasis: 21 },
  txt17Outer: { position: `relative`, flexShrink: 0, flexBasis: `auto` },
  txt17Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    overflow: `visible`
  },
  txt17Content: {
    color: `rgb(51,51,51)`,
    textAlign: `left`,
    letterSpacing: `1px`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `44px`,
    fontSize: `28px`,
    fontWeight: 700,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  space112: { position: `relative`, flexGrow: 1, flexBasis: 368 },
  space85: { position: `relative`, flexShrink: 0, flexBasis: 18 },
  txt18Outer: { position: `relative`, flexShrink: 0, flexBasis: `auto` },
  txt18Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    overflow: `visible`
  },
  txt18Content: {
    color: `rgb(169,172,193)`,
    textAlign: `left`,
    letterSpacing: `1px`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `39.199999999999996px`,
    fontSize: `28px`,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  space87: { position: `relative`, flexShrink: 0, flexBasis: 34 },
  coverGroupGroup52Outer: { position: `relative`, flexGrow: 1, flexBasis: 228 },
  coverGroupGroup52Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`
  },
  backgroundRect24Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    backgroundColor: `rgb(255,255,255)`,
    borderRadius: `0px 0px 0px 0px`
  },
  foregroundGroupFlexbox121Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`
  },
  space122: { position: `relative`, flexShrink: 0, flexBasis: 49 },
  img26Outer: { position: `relative`, flexShrink: 0, flexBasis: 162 },
  img26Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    backgroundImage: `url(${require('assets/0aa7ef7f49cf7297caef94065abb7f0c.png')})`,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`,
    borderRadius: `16px 16px 16px 16px`
  },
  space124: { position: `relative`, flexShrink: 0, flexBasis: 29 },
  flexbox158Outer: { position: `relative`, flexGrow: 1, flexBasis: 460 },
  flexbox158Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    flexDirection: `column`
  },
  space159: { position: `relative`, flexShrink: 0, flexBasis: 25 },
  txt27Outer: { position: `relative`, flexGrow: 1, flexBasis: 88 },
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
    fontSize: `30px`,
    fontWeight: 500,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    margin: 0,
    userSelect: `text`
  },
  space161: { position: `relative`, flexShrink: 0, flexBasis: 30 },
  txt28Outer: { position: `relative`, flexShrink: 0, flexBasis: `auto` },
  txt28Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    overflow: `visible`
  },
  txt28Content: {
    color: `rgb(229,114,73)`,
    textAlign: `left`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `42px`,
    fontSize: `30px`,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  space163: { position: `relative`, flexShrink: 0, flexBasis: 43 },
  space128: { position: `relative`, flexGrow: 1, flexBasis: 50 },
  space89: { position: `relative`, flexShrink: 0, flexBasis: 30 },
  coverGroupGroup60Outer: { position: `relative`, flexBasis: 88 },
  coverGroupGroup60Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`
  },
  backgroundRect42Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    backgroundColor: `rgb(255,255,255)`,
    borderRadius: `0px 0px 0px 0px`
  },
  foregroundGroupFlexbox130Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`
  },
  space131: { position: `relative`, flexBasis: 50 },
  txt43Outer: { position: `relative`, flexShrink: 0, flexBasis: `auto` },
  txt43Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    overflow: `visible`
  },
  txt43Content: {
    color: `rgb(51,51,51)`,
    textAlign: `left`,
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
  space133: { position: `relative`, flexGrow: 1, flexBasis: 244 },
  txt44Outer: { position: `relative`, flexShrink: 0, flexBasis: `auto` },
  txt44Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    justifyContent: `flex-end`,
    overflow: `visible`
  },
  txt44Content: {
    color: `rgb(51,51,51)`,
    textAlign: `right`,
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
  space135: { position: `relative`, flexBasis: 50 },
  coverGroupGroup54Outer: { position: `relative`, flexBasis: 88 },
  coverGroupGroup54Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`
  },
  backgroundRect30Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    backgroundColor: `rgb(255,255,255)`,
    borderRadius: `0px 0px 0px 0px`
  },
  foregroundGroupFlexbox137Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`
  },
  space138: { position: `relative`, flexBasis: 50 },
  txt31Outer: { position: `relative`, flexShrink: 0, flexBasis: `auto` },
  txt31Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    overflow: `visible`
  },
  txt31Content: {
    color: `rgb(51,51,51)`,
    textAlign: `left`,
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
  space140: { position: `relative`, flexGrow: 1, flexBasis: 444 },
  txt32Outer: { position: `relative`, flexShrink: 0, flexBasis: `auto` },
  txt32Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    justifyContent: `flex-end`,
    overflow: `visible`
  },
  txt32Content: {
    color: `rgb(51,51,51)`,
    textAlign: `right`,
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
  space142: { position: `relative`, flexBasis: 50 },
  coverGroupGroup58Outer: { position: `relative`, flexBasis: 88 },
  coverGroupGroup58Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`
  },
  backgroundRect38Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    backgroundColor: `rgb(255,255,255)`,
    borderRadius: `0px 0px 0px 0px`
  },
  foregroundGroupFlexbox144Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`
  },
  space145: { position: `relative`, flexBasis: 50 },
  txt39Outer: { position: `relative`, flexShrink: 0, flexBasis: `auto` },
  txt39Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    overflow: `visible`
  },
  txt39Content: {
    color: `rgb(51,51,51)`,
    textAlign: `left`,
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
  space147: { position: `relative`, flexGrow: 1, flexBasis: 484 },
  txt40Outer: { position: `relative`, flexShrink: 0, flexBasis: `auto` },
  txt40Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    justifyContent: `flex-end`,
    overflow: `visible`
  },
  txt40Content: {
    color: `rgb(51,51,51)`,
    textAlign: `right`,
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
  space149: { position: `relative`, flexBasis: 50 },
  coverGroupGroup56Outer: { position: `relative`, flexBasis: 88 },
  coverGroupGroup56Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`
  },
  backgroundRect34Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    backgroundColor: `rgb(255,255,255)`,
    borderRadius: `0px 0px 0px 0px`
  },
  foregroundGroupFlexbox151Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`
  },
  space152: { position: `relative`, flexBasis: 50 },
  txt35Outer: { position: `relative`, flexShrink: 0, flexBasis: `auto` },
  txt35Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    overflow: `visible`
  },
  txt35Content: {
    color: `rgb(51,51,51)`,
    textAlign: `left`,
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
  space154: { position: `relative`, flexGrow: 1, flexBasis: 309 },
  txt36Outer: { position: `relative`, flexShrink: 0, flexBasis: `auto` },
  txt36Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    justifyContent: `flex-end`,
    overflow: `visible`
  },
  txt36Content: {
    color: `rgb(51,51,51)`,
    textAlign: `right`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `39.199999999999996px`,
    fontSize: `28px`,
    fontWeight: 700,
    fontStyle: `italic`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  space156: { position: `relative`, flexBasis: 50 },
  space94: { position: `relative`, flexShrink: 0, flexBasis: 110 },
  flexbox114Outer: { position: `relative`, flexBasis: 116 },
  flexbox114Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`
  },
  space115: { position: `relative`, flexGrow: 1, flexBasis: 48 },
  coverGroupGroup50Outer: { position: `relative`, flexGrow: 1, flexBasis: 314 },
  coverGroupGroup50Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`
  },
  rect10Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    borderRadius: `14px 14px 14px 14px`,
    borderStyle: `solid`,
    borderColor: `rgba(169,172,193,0.2)`,
    borderWidth: 4
  },
  txt11Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    justifyContent: `center`,
    overflow: `visible`
  },
  txt11Content: {
    color: `rgb(169,172,193)`,
    textAlign: `center`,
    letterSpacing: `1px`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `39.199999999999996px`,
    fontSize: `28px`,
    fontWeight: 700,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  space117: { position: `relative`, flexShrink: 0, flexBasis: 28 },
  coverGroupGroup48Outer: { position: `relative`, flexGrow: 1, flexBasis: 310 },
  coverGroupGroup48Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`
  },
  rect7Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    backgroundColor: `rgb(228,114,74)`,
    borderRadius: `14px 14px 14px 14px`
  },
  txt8Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    justifyContent: `center`,
    overflow: `visible`
  },
  txt8Content: {
    color: `rgb(255,255,255)`,
    textAlign: `center`,
    letterSpacing: `1px`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `39.199999999999996px`,
    fontSize: `28px`,
    fontWeight: 500,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  },
  space119: { position: `relative`, flexGrow: 1, flexBasis: 50 },
  space98: { position: `relative`, flexShrink: 0, flexBasis: 78 },
  txt21Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    overflow: `visible`
  },
  txt21Content: {
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
  },
  txt22Body: {
    pointerEvents: `auto`,
    width: `100%`,
    height: `100%`,
    overflow: `visible`
  },
  txt22Content: {
    color: `rgb(127,167,255)`,
    textAlign: `left`,
    letterSpacing: `1px`,
    overflow: `visible`,
    marginTop: 0,
    marginBottom: 0,
    whiteSpace: `pre-wrap`,
    lineHeight: `36.4px`,
    fontSize: `26px`,
    fontWeight: 400,
    fontStyle: `normal`,
    fontFamily: `"Roboto", Helvetica, Arial, serif`,
    userSelect: `text`
  }
});

const layouts = {
  img3: {
    absolute: true,
    nop: true,
    areaStyle: {},
    xy: [['750px'], ['1624px']],
    className: css(styles.img3Body)
  },
  backgroundRect4: {
    absolute: true,
    xy: [['minmax(0px,750fr)'], ['minmax(1254px,1254fr)']],
    className: css(styles.backgroundRect4Body)
  },
  img15: {
    nop: true,
    areaStyle: {},
    xy: [['22px'], ['11px', '22px', '11fr']],
    className: css(styles.img15Body),
    outerClassName: css(styles.img15Outer)
  },
  txt13: {
    xy: [
      ['1fr', 'minmax(434px,auto)', '0px'],
      ['1fr', 'minmax(44px,auto)', '1fr']
    ],
    className: css(styles.txt13Body),
    outerClassName: css(styles.txt13Outer)
  },
  flexbox100: {
    xy: [['minmax(0px,750fr)'], ['minmax(44px,44fr)']],
    className: css(styles.flexbox100Body),
    outerClassName: css(styles.flexbox100Outer)
  },
  txt14: {
    xy: [
      ['90px', 'minmax(266px,auto)', '394fr'],
      ['1fr', 'minmax(39px,auto)', '1fr']
    ],
    className: css(styles.txt14Body),
    outerClassName: css(styles.txt14Outer)
  },
  img19: {
    nop: true,
    areaStyle: {},
    xy: [['22px'], ['11px', '22px', '11fr']],
    className: css(styles.img19Body),
    outerClassName: css(styles.img19Outer)
  },
  txt17: {
    xy: [
      ['1fr', 'minmax(292px,auto)', '0px'],
      ['1fr', 'minmax(44px,auto)', '1fr']
    ],
    className: css(styles.txt17Body),
    outerClassName: css(styles.txt17Outer)
  },
  flexbox107: {
    xy: [['minmax(0px,750fr)'], ['minmax(44px,44fr)']],
    className: css(styles.flexbox107Body),
    outerClassName: css(styles.flexbox107Outer)
  },
  txt18: {
    xy: [
      ['90px', 'minmax(391px,auto)', '269fr'],
      ['1fr', 'minmax(39px,auto)', '1fr']
    ],
    className: css(styles.txt18Body),
    outerClassName: css(styles.txt18Outer)
  },
  backgroundRect24: {
    absolute: true,
    xy: [['minmax(0px,750fr)'], ['minmax(228px,228fr)']],
    className: css(styles.backgroundRect24Body)
  },
  img26: {
    nop: true,
    areaStyle: {},
    xy: [['minmax(0px,162fr)'], ['29px', 'minmax(162px,162fr)', '37fr']],
    className: css(styles.img26Body),
    outerClassName: css(styles.img26Outer)
  },
  txt27: {
    xy: [['minmax(0px,460fr)'], ['1fr', 'auto', '1fr']],
    className: css(styles.txt27Body),
    outerClassName: css(styles.txt27Outer)
  },
  txt28: {
    xy: [
      ['0px', 'minmax(117px,auto)', '343fr'],
      ['1fr', 'minmax(42px,auto)', '1fr']
    ],
    className: css(styles.txt28Body),
    outerClassName: css(styles.txt28Outer)
  },
  flexbox158: {
    xy: [['minmax(0px,460fr)'], ['minmax(228px,228fr)']],
    className: css(styles.flexbox158Body),
    outerClassName: css(styles.flexbox158Outer)
  },
  foregroundGroupFlexbox121: {
    xy: [['minmax(0px,750fr)'], ['minmax(0px,228fr)']],
    className: css(styles.foregroundGroupFlexbox121Body)
  },
  coverGroupGroup52: {
    xy: [['minmax(0px,750fr)'], ['minmax(0px,228fr)']],
    className: css(styles.coverGroupGroup52Body),
    outerClassName: css(styles.coverGroupGroup52Outer)
  },
  backgroundRect42: {
    absolute: true,
    xy: [['minmax(0px,750fr)'], ['minmax(88px,88fr)']],
    className: css(styles.backgroundRect42Body)
  },
  txt43: {
    xy: [
      ['1fr', 'minmax(209px,auto)', '0px'],
      ['28fr', 'minmax(39px,auto)', '21fr']
    ],
    className: css(styles.txt43Body),
    outerClassName: css(styles.txt43Outer)
  },
  txt44: {
    xy: [
      ['1fr', 'minmax(197px,auto)', '0px'],
      ['28fr', 'minmax(39px,auto)', '21fr']
    ],
    className: css(styles.txt44Body),
    outerClassName: css(styles.txt44Outer)
  },
  foregroundGroupFlexbox130: {
    absolute: true,
    xy: [['minmax(0px,750fr)'], ['minmax(88px,88fr)']],
    className: css(styles.foregroundGroupFlexbox130Body)
  },
  coverGroupGroup60: {
    xy: [['minmax(0px,750fr)'], ['minmax(88px,88fr)']],
    className: css(styles.coverGroupGroup60Body),
    outerClassName: css(styles.coverGroupGroup60Outer)
  },
  backgroundRect30: {
    absolute: true,
    xy: [['minmax(0px,750fr)'], ['minmax(88px,88fr)']],
    className: css(styles.backgroundRect30Body)
  },
  txt31: {
    xy: [
      ['1fr', 'minmax(97px,auto)', '0px'],
      ['28fr', 'minmax(39px,auto)', '21fr']
    ],
    className: css(styles.txt31Body),
    outerClassName: css(styles.txt31Outer)
  },
  txt32: {
    xy: [
      ['1fr', 'minmax(109px,auto)', '0px'],
      ['28fr', 'minmax(39px,auto)', '21fr']
    ],
    className: css(styles.txt32Body),
    outerClassName: css(styles.txt32Outer)
  },
  foregroundGroupFlexbox137: {
    absolute: true,
    xy: [['minmax(0px,750fr)'], ['minmax(88px,88fr)']],
    className: css(styles.foregroundGroupFlexbox137Body)
  },
  coverGroupGroup54: {
    xy: [['minmax(0px,750fr)'], ['minmax(88px,88fr)']],
    className: css(styles.coverGroupGroup54Body),
    outerClassName: css(styles.coverGroupGroup54Outer)
  },
  backgroundRect38: {
    absolute: true,
    xy: [['minmax(0px,750fr)'], ['minmax(88px,88fr)']],
    className: css(styles.backgroundRect38Body)
  },
  txt39: {
    xy: [
      ['1fr', 'minmax(88px,auto)', '0px'],
      ['28fr', 'minmax(39px,auto)', '21fr']
    ],
    className: css(styles.txt39Body),
    outerClassName: css(styles.txt39Outer)
  },
  txt40: {
    xy: [
      ['1fr', 'minmax(78px,auto)', '0px'],
      ['28fr', 'minmax(39px,auto)', '21fr']
    ],
    className: css(styles.txt40Body),
    outerClassName: css(styles.txt40Outer)
  },
  foregroundGroupFlexbox144: {
    absolute: true,
    xy: [['minmax(0px,750fr)'], ['minmax(88px,88fr)']],
    className: css(styles.foregroundGroupFlexbox144Body)
  },
  coverGroupGroup58: {
    xy: [['minmax(0px,750fr)'], ['minmax(88px,88fr)']],
    className: css(styles.coverGroupGroup58Body),
    outerClassName: css(styles.coverGroupGroup58Outer)
  },
  backgroundRect34: {
    absolute: true,
    xy: [['minmax(0px,750fr)'], ['minmax(88px,88fr)']],
    className: css(styles.backgroundRect34Body)
  },
  txt35: {
    xy: [
      ['1fr', 'minmax(232px,auto)', '0px'],
      ['28fr', 'minmax(39px,auto)', '21fr']
    ],
    className: css(styles.txt35Body),
    outerClassName: css(styles.txt35Outer)
  },
  txt36: {
    xy: [
      ['1fr', 'minmax(109px,auto)', '0px'],
      ['28fr', 'minmax(39px,auto)', '21fr']
    ],
    className: css(styles.txt36Body),
    outerClassName: css(styles.txt36Outer)
  },
  foregroundGroupFlexbox151: {
    absolute: true,
    xy: [['minmax(0px,750fr)'], ['minmax(88px,88fr)']],
    className: css(styles.foregroundGroupFlexbox151Body)
  },
  coverGroupGroup56: {
    xy: [['minmax(0px,750fr)'], ['minmax(88px,88fr)']],
    className: css(styles.coverGroupGroup56Body),
    outerClassName: css(styles.coverGroupGroup56Outer)
  },
  rect10: {
    absolute: true,
    xy: [['minmax(0px,314fr)'], ['minmax(116px,116fr)']],
    className: css(styles.rect10Body)
  },
  txt11: {
    absolute: true,
    xy: [['66fr', '184px', '65fr'], ['43fr', 'minmax(39px,auto)', '34fr']],
    className: css(styles.txt11Body)
  },
  coverGroupGroup50: {
    xy: [['minmax(270px,350px)'], ['minmax(116px,116fr)']],
    className: css(styles.coverGroupGroup50Body),
    outerClassName: css(styles.coverGroupGroup50Outer)
  },
  rect7: {
    absolute: true,
    xy: [['minmax(0px,310fr)'], ['minmax(112px,112fr)']],
    className: css(styles.rect7Body)
  },
  txt8: {
    absolute: true,
    xy: [['53fr', '205px', '53fr'], ['41fr', 'minmax(39px,auto)', '32fr']],
    className: css(styles.txt8Body)
  },
  coverGroupGroup48: {
    xy: [['minmax(270px,350px)'], ['2px', 'minmax(112px,112fr)', '2fr']],
    className: css(styles.coverGroupGroup48Body),
    outerClassName: css(styles.coverGroupGroup48Outer)
  },
  flexbox114: {
    xy: [['minmax(0px,750fr)'], ['minmax(116px,116fr)']],
    className: css(styles.flexbox114Body),
    outerClassName: css(styles.flexbox114Outer)
  },
  foregroundGroupFlexbox74: {
    xy: [['minmax(0px,750fr)'], ['minmax(1254px,1254fr)']],
    className: css(styles.foregroundGroupFlexbox74Body)
  },
  group46: {
    xy: [['minmax(0px,750fr)'], ['370px', 'minmax(0px,1254fr)', '0fr']],
    className: css(styles.group46Body)
  },
  txt21: {
    absolute: true,
    xy: [
      ['50px', 'minmax(500px,auto)', '200fr'],
      ['229px', 'minmax(67px,auto)', '1328fr']
    ],
    className: css(styles.txt21Body)
  },
  txt22: {
    absolute: true,
    xy: [
      ['50px', 'minmax(561px,auto)', '139fr'],
      ['300px', 'minmax(36px,auto)', '1288fr']
    ],
    className: css(styles.txt22Body)
  },
  group1: {
    nop: true,
    trackStyle: { overflow: 'auto' },
    areaStyle: { overflow: 'hidden' },
    xy: [['minmax(0px,750fr)'], ['minmax(0px,1624fr)']],
    className: css(styles.group1Body)
  }
};
