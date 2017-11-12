import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

class SearchFilters extends React.Component {
  onFilterChange(prop, value) {
    this.props.updateFilters({ prop, value });
  }

  renderSearchRow() {
    const { searchStr } = this.props;

    const onInput = (event) => {
      this.onFilterChange('searchStr', event.target.value);
    };

    return (
      <div className="class-filter-row">
        <div className="row">
          <div className="col-4">
            <span>Search</span>
          </div>
          <div className="col-8">
            <input value={searchStr || ''} onChange={onInput} />
          </div>
        </div>
      </div>
    );
  }

  renderClasseTypeRow() {
    const { isPrivateClasse } = this.props;
    const isPrivateClick = this.onFilterChange.bind(
      this,

      'isPrivateClasse',
      isPrivateClasse === true ? null : true,
    );

    const isPublicClick = this.onFilterChange.bind(
      this,
      'isPrivateClasse',
      isPrivateClasse === false ? null : false,
    );

    const privateStyle = classNames('classe-filter__filter-btn', {
      'classe-filter__filter-btn--active': isPrivateClasse === true,
    });

    const publicStyle = classNames('classe-filter__filter-btn', {
      'classe-filter__filter-btn--active': isPrivateClasse === false,
    });

    return (
      <div className="class-filter-row">
        <div className="row">
          <div className="col-4">
            <span>Class Type</span>
          </div>
          <div className="col-4">
            <button onClick={isPrivateClick} className={privateStyle}>
              Private
            </button>
          </div>
          <div className="col-4">
            <button onClick={isPublicClick} className={publicStyle}>
              Public
            </button>
          </div>
        </div>
      </div>
    );
  }

  renderCertifiedRow() {
    const { certified } = this.props;
    const onCertifiedClick = this.onFilterChange.bind(
      this,
      'certified',
      certified === true ? null : true,
    );

    const onNotCertifiedClick = this.onFilterChange.bind(
      this,
      'certified',
      certified === false ? null : false,
    );

    const privateStyle = classNames('classe-filter__filter-btn', {
      'classe-filter__filter-btn--active': certified === true,
    });

    const publicStyle = classNames('classe-filter__filter-btn', {
      'classe-filter__filter-btn--active': certified === false,
    });

    return (
      <div className="class-filter-row">
        <div className="row">
          <div className="col-4">
            <span>Qualification</span>
          </div>
          <div className="col-4">
            <button onClick={onCertifiedClick} className={privateStyle}>
              Certified
            </button>
          </div>
          <div className="col-4">
            <button onClick={onNotCertifiedClick} className={publicStyle}>
              Uncertified
            </button>
          </div>
        </div>
      </div>
    );
  }

  renderAvailabilityRow() {
    const btnStyle = classNames('classe-filter__filter-btn');
    return (
      <div className="class-filter-row">
        <div className="row">
          <div className="col-4">
            <span>Availability-TODO</span>
          </div>
          <div className="col-4">
            <button className={btnStyle}>Monday</button>
            <button className={btnStyle}>Wednesday</button>
            <button className={btnStyle}>Friday</button>
            <button className={btnStyle}>Sunday</button>
          </div>
          <div className="col-4">
            <button className={btnStyle}>Tuesday</button>
            <button className={btnStyle}>Thursday</button>
            <button className={btnStyle}>Saturday</button>
          </div>
        </div>
      </div>
    );
  }

  renderExperienceRow() {
    // TODO Do not match backend values (exp_1, exp_2, exp_3, exp_4 } need
    // clarification
    const btnStyle = classNames('classe-filter__filter-btn');
    return (
      <div className="class-filter-row">
        <div className="row">
          <div className="col-4">
            <span>Experience-TODO</span>
          </div>
          <div className="col-4">
            <button className={btnStyle}>0-2 years</button>
            <button className={btnStyle}>6-9 years</button>
          </div>
          <div className="col-4">
            <button className={btnStyle}>3-5 years</button>
            <button className={btnStyle}>10+ years</button>
          </div>
        </div>
      </div>
    );
  }

  renderBackgroudCheckRow() {
    const btnStyle = classNames('classe-filter__filter-btn');
    return (
      <div className="class-filter-row">
        <div className="row">
          <div className="col-4">
            <span>Background check-TODO</span>
          </div>
          <div className="col-4">
            <button className={btnStyle}>Required</button>
          </div>
          <div className="col-4">
            <button className={btnStyle}>Not Required</button>
          </div>
        </div>
      </div>
    );
  }

  renderReviewRow() {
    const btnStyle = classNames('classe-filter__filter-btn');
    return (
      <div className="class-filter-row">
        <div className="row">
          <div className="col-4">
            <span>Reviews-TODO</span>
          </div>
          <div className="col-4">
            <button className={btnStyle}>Has reviews</button>
          </div>
          <div className="col-4">
            <button className={btnStyle}>Not Required</button>
          </div>
        </div>
      </div>
    );
  }

  renderSubmitButton() {
    const { submit } = this.props;
    return (
      <div className="class-filter-row">
        <button onClick={submit}>Search</button>
      </div>
    );
  }

  render() {
    return (
      <div className="class-filter">
        <div className="class-filter-row">
          <div className="row">
            <div className="col-12">
              <div className="card-title">
                <h5>Filter Class</h5>
              </div>
            </div>
          </div>
        </div>
        { this.renderSearchRow() }
        { this.renderClasseTypeRow() }
        { this.renderCertifiedRow() }
        { this.renderAvailabilityRow() }
        { this.renderExperienceRow() }
        { this.renderBackgroudCheckRow() }
        { this.renderReviewRow() }
        { this.renderSubmitButton() }
      </div>
    );
  }
}

SearchFilters.defaultProps = {
  searchStr: '',
  isPrivateClasse: null,
  certified: null,
};

SearchFilters.propTypes = {
  submit: PropTypes.func.isRequired,
  updateFilters: PropTypes.func.isRequired,
  searchStr: PropTypes.string,
  isPrivateClasse: PropTypes.bool,
  certified: PropTypes.bool,
};

export default SearchFilters;
