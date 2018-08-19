import React, { Component, Fragment } from "react";
import classes from "./Main.css";

export class Main extends Component {
  render() {
    return (
      <Fragment>
        <div className={classes.grid}>
          <div className={classes.item} tabIndex="1">
            <div className={classes.box}>
              <div className={classes.diamond}>
                <span>1</span>
              </div>
              <div className={classes.tooltip}>grid-area: hero</div>
            </div>
          </div>
          <div className={classes.item} tabIndex="2">
            <div className={classes.box}>
              <div className={classes.diamond}>
                <span>2</span>
              </div>
              <div className={classes.tooltip}>grid-area: big</div>
            </div>
          </div>
          <div className={classes.item} tabIndex="3">
            <div className={classes.box}>
              <div className={classes.diamond}>
                <span>3</span>
              </div>
              <div className={classes.tooltip}>grid-area: medium</div>
            </div>
          </div>
          <div className={classes.item} tabIndex="4">
            <div className={classes.box}>
              <div className={classes.diamond}>
                <span>4</span>
              </div>
              <div className={classes.tooltip}>grid-area: medium</div>
            </div>
          </div>
          <div className={classes.item} tabIndex="5">
            <div className={classes.box}>
              <div className={classes.diamond}>
                <span>5</span>
              </div>
              <div className={classes.tooltip}>grid-area: small</div>
            </div>
          </div>
          <div className={classes.item} tabIndex="6">
            <div className={classes.box}>
              <div className={classes.diamond}>
                <span>6</span>
              </div>
              <div className={classes.tooltip}>grid-area: small</div>
            </div>
          </div>
          <div className={classes.item} tabIndex="7">
            <div className={classes.box}>
              <div className={classes.diamond}>
                <span>7</span>
              </div>
              <div className={classes.tooltip}>grid-area: small</div>
            </div>
          </div>
          <div className={classes.item} tabIndex="8">
            <div className={classes.box}>
              <div className={classes.diamond}>
                <span>8</span>
              </div>
              <div className={classes.tooltip}>grid-area: small</div>
            </div>
          </div>
          <div className={classes.item} tabIndex="9">
            <div className={classes.box}>
              <div className={classes.diamond}>
                <span>9</span>
              </div>
              <div className={classes.tooltip}>grid-area: small</div>
            </div>
          </div>
          <div className={classes.item} tabIndex="10">
            <div className={classes.box}>
              <div className={classes.diamond}>
                <span>10</span>
              </div>
              <div className={classes.tooltip}>grid-area: small</div>
            </div>
          </div>
          <div className={classes.item} tabIndex="11">
            <div className={classes.box}>
              <div className={classes.diamond}>
                <span>11</span>
              </div>
              <div className={classes.tooltip}>grid-area: small</div>
            </div>
          </div>
          <div className={classes.item} tabIndex="12">
            <div className={classes.box}>
              <div className={classes.diamond}>
                <span>12</span>
              </div>
              <div className={classes.tooltip}>grid-area: small</div>
            </div>
          </div>
          <div className={classes.item} tabIndex="13">
            <div className={classes.box}>
              <div className={classes.diamond}>
                <span>13</span>
              </div>
              <div className={classes.tooltip}>grid-area: small</div>
            </div>
          </div>
          <div className={classes.item} tabIndex="14">
            <div className={classes.box}>
              <div className={classes.diamond}>
                <span>14</span>
              </div>
              <div className={classes.tooltip}>grid-area: small</div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
