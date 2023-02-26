import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CategoryButton from './Skills/CategoryButton';
import SkillBar from './Skills/SkillBar';

const handleProps = ({ categories, skills }) => ({
  buttons: categories.map((cat) => cat.name).reduce((obj, key) => ({
    ...obj,
    [key]: false,
  }), { All: true }),
  skills,
});

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = handleProps({ categories: props.categories, skills: props.skills });
  }

  getRows() {
    // search for true active categories
    const actCat = Object.keys(this.state.buttons).reduce((cat, key) => (
      this.state.buttons[key] ? key : cat
    ), 'All');

    const filteredSkills = this.state.skills.filter((skill) => (actCat === 'All' || skill.category.includes(actCat)))
      .sort((a, b) => {
        let ret = 0;
        if (a.competency > b.competency) ret = -1;
        else if (a.competency < b.competency) ret = 1;
        else if (a.category[0] > b.category[0]) ret = -1;
        else if (a.category[0] < b.category[0]) ret = 1;
        else if (a.title > b.title) ret = 1;
        else if (a.title < b.title) ret = -1;
        return ret;
      });

    const numRows = Math.ceil(filteredSkills.length / 2);

    const rows = [];
    for (let i = 0; i < numRows; i += 1) {
      const skill1 = filteredSkills[i * 2];
      const skill2 = filteredSkills[i * 2 + 1];
      let col1 = null;
      let col2 = null;

      if (skill1) {
        col1 = (<SkillBar
          categories={this.props.categories}
          data={skill1}
          key={skill1.title}
        />);
      }
      if (skill2) {
        col2 = (<SkillBar
          categories={this.props.categories}
          data={skill2}
          key={skill2.title}
        />);
      }
      rows.push(
        <div className="row" key={i}>
          {col1}
          {col2}
        </div>,
      );
    }
    return rows;

    // const sortedskills = this.state.skills.sort((a, b) => {
    //   let ret = 0;
    //   if (a.competency > b.competency) ret = -1;
    //   else if (a.competency < b.competency) ret = 1;
    //   else if (a.category[0] > b.category[0]) ret = -1;
    //   else if (a.category[0] < b.category[0]) ret = 1;
    //   else if (a.title > b.title) ret = 1;
    //   else if (a.title < b.title) ret = -1;
    //   return ret;
    // });
    // console.error(sortedskills);
    // return sortedskills.filter((skill) => (actCat === 'All' || skill.category.includes(actCat)))
    //   .map((skill) => (
    //     <SkillBar
    //       categories={this.props.categories}
    //       data={skill}
    //       key={skill.title}
    //     />
    //   ));
  }

  getButtons() {
    return Object.keys(this.state.buttons).map((key) => (
      <CategoryButton
        label={key}
        key={key}
        active={this.state.buttons}
        handleClick={this.handleChildClick}
      />
    ));
  }

  handleChildClick = (label) => {
    this.setState((prevState) => {
      // Toggle button that was clicked. Turn all other buttons off.
      const buttons = Object.keys(prevState.buttons).reduce((obj, key) => ({
        ...obj,
        [key]: (label === key) && !prevState.buttons[key],
      }), {});
      // Turn on 'All' button if other buttons are off
      buttons.All = !Object.keys(prevState.buttons).some((key) => buttons[key]);
      return { buttons };
    });
  }

  render() {
    return (
      <div className="skills">
        <div className="link-to" id="skills" />
        <div className="title">
          <h3>Skills</h3>
        </div>
        <div className="skill-button-container">
          {this.getButtons()}
        </div>
        <div className="skill-row-container">
          {this.getRows()}
        </div>
      </div>
    );
  }
}

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    competency: PropTypes.number,
    category: PropTypes.arrayOf(PropTypes.string),
  })),
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  })),
};

Skills.defaultProps = {
  skills: [],
  categories: [],
};

export default Skills;
