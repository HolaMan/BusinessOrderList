import React from 'react';
import { commonStyles, config } from './pxConfig.v11';

// posize version v0.11.2

const StyleSheet = config.StyleSheet;
const css = config.css;
const AnchorLink = config.AnchorLink;

const styles = StyleSheet.create({
  absTrack: {
    display: ['grid', '-ms-grid'],
    pointerEvents: 'none',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
  },

  relTrack: {
    display: ['grid', '-ms-grid'],
    pointerEvents: 'none',
    position: 'relative'
  },

  area: {
    pointerEvents: 'none',
    position: 'relative',
    width: '100%', // fit box, it is necessary because child need refer parent size
    height: '100%' // fit box, it is necessary because child need refer parent size
  },

  debugTrack: {
    outlineWidth: 1,
    outlineColor: '#106709',
    outlineStyle: 'solid',
    outlineOffset: -1
  },

  debugArea: {
    outlineWidth: 3,
    outlineColor: '#106709',
    outlineStyle: 'solid',
    outlineOffset: -3
  }
});

const classNameMaps = new Map();

function hashFun(obj) {
  const str = JSON.stringify(obj);
  let hash = 5381;
  let i = str.length;
  while (i) { hash = (hash * 33) ^ str.charCodeAt(i -= 1); }
  hash = (hash >>> 0).toString(36);

  if (config.hashName) {
    return hash;
  } else {
    let result = classNameMaps.get(hash);
    if (!result) {
      result = `${classNameMaps.size + 1}`;
      classNameMaps.set(hash, result);
    }
    return result;
  }
}

const isAnchor = /^#[a-zA-Z0-9]+$/;

function posizeContent(props, WrappedComponent) {
  const {
    layout: {
      anchorClassName = css(commonStyles.anchor),
      clickableClassName = css(commonStyles.clickable),
      className,
      altClassName
    },
    pxHref,
    pxHrefTarget,
    pxRef,
    ...childProps // style, pxDebug
  } = props;

  const AnchorTag = (pxHref && (isAnchor.test(pxHref) ? AnchorLink : 'a')) || React.Fragment;
  const anchorProps = pxHref ? {
    offset: config.anchorScrollOffset,
    href: pxHref,
    target: pxHrefTarget,
    className: anchorClassName
  } : {};

  return (
    <AnchorTag key={'anchor'} {...anchorProps}>
      <WrappedComponent key={'content'}
                        ref={pxRef}
                        className={[
                          'content',
                          altClassName,
                          props.onClick && clickableClassName,
                          className
                        ].filter(e => !!e).join(' ')}
                        {...childProps} />
    </AnchorTag>
  );
}

function posizeOuter(props, inner, style) {
  const { layout: { outerClassName } } = props;
  const OuterTag = outerClassName || style ? 'div' : React.Fragment;
  const outerProps = {};
  if (outerClassName) {
    outerProps.className =
      ['outer', outerClassName].filter(e => !!e).join(' ');
  }
  if (style) outerProps.style = style;

  return (
    <OuterTag key={'outer'} {...outerProps} >
      {inner}
    </OuterTag>
  );
}

function genGridStyles(horizontal, vertical, zIndex, trackStyle, areaStyle) {
  const v = Math.round(vertical.length / 2);
  const h = Math.round(horizontal.length / 2);

  const track = {
    grid: `${vertical.join(' ')} / ${horizontal.join(' ')}`,
    '-ms-grid-columns': horizontal.join(' '),
    '-ms-grid-rows': vertical.join(' '),
    zIndex,
    height: '100%',
    width: '100%',
    ...trackStyle
  };

  const area = {
    gridArea: `${v} / ${h} / ${v} / ${h}`,
    '-ms-grid-column': `${h}`,
    '-ms-grid-row': `${v}`,
    ...areaStyle
  };

  const trackName = `${hashFun(track)}`;
  const areaName = `${hashFun(area)}`;
  return {
    styles: StyleSheet.create({
      [trackName]: track,
      [areaName]: area
    }),
    trackName,
    areaName
  };
}

function gridPosize(props, WrappedComponent) {
  const {
    id = null,
    layout: {
      absolute = false,
      zIndex = null,
      trackStyle = null,
      areaStyle = null,
      xy = [['auto'], ['auto']], // vertical, horizontal
      altClassName
    },
    pxDebug
  } = props;

  const gridStyles = genGridStyles(xy[0], xy[1], zIndex, trackStyle, areaStyle);
  return (
    <div key={'track'}
         className={
           [
             'track',
             altClassName? `${altClassName}_track` : null,
             css(absolute ? styles.absTrack : styles.relTrack,
               gridStyles.styles[gridStyles.trackName],
               (config.debug || pxDebug) && styles.debugTrack,
             )
           ].filter(e => !!e).join(' ')} id={id ? `${id}Track` : null}>
      <div key={'area'}
           className={
             [
               'area',
               altClassName? `${altClassName}_area` : null,
               css(styles.area,
                 gridStyles.styles[gridStyles.areaName],
                 (config.debug || pxDebug) && styles.debugArea)
             ].filter(e => !!e).join(' ')} id={id ? `${id}Area` : null}>
        {posizeContent(props, WrappedComponent)}
      </div>
    </div>
  );
}

export default function posize(WrappedComponent) {
  return (props) => {
    let model;
    if (config.enableInject && config.canInjectWrappedComponent(props)) {
      model = config.injectWrappedComponent(props, WrappedComponent);
    } else {
      model = gridPosize(props, WrappedComponent);
    }
    return posizeOuter(props, model);
  };
}
