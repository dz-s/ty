import React, { Component, Fragment } from "react";
import db from "../DBdriver";
import classes from "./Main.css";
import { db_name } from "../config";

export class Main extends Component {
  constructor() {
    super();
    this.state = { thanks: [] };
  }

  componentDidMount() {
    db.table(db_name)
      .toArray()
      .then(thanks => {
        this.setState({ thanks });
      });
  }

  sayThankYou = (
    event,
    to: string = "twitter",
    from: string = "John Doe",
    message: string = "Thanks a lot for your button!"
  ) => {
    const thankObj = {
      to,
      from,
      message
    };
    db.table(db_name)
      .add(thankObj)
      .then(id => {
        const thanks = [
          ...this.state.thanks,
          Object.assign({}, thankObj, { id })
        ];
        this.setState({ thanks });
      });
  };

  render() {
    return (
      <Fragment>
        <div className={classes.grid}>
          <div name="twitter" className={classes.item} onClick={this.sayThankYou} tabIndex="1">
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
        </div>
      </Fragment>
    );
  }
}
