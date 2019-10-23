import React from 'react';
import { connect } from 'react-redux';
import { selectPublications, selectLoading } from "redux/publications/selectors";
import { getPublications } from "redux/publications/actions";
import './publicaties.scss';

class Publicaties extends React.Component {
  componentDidMount() {
    this.props.getPublications();
  }

  render() {
    const { data, loading } = this.props;

    if (loading || !data) return null;

    return (
      <div className="publicaties content ui container">
        <h2>Publicaties</h2>
        <h3>Spinnakerkrant</h3>
        {!data.kranten.length && (
          <p>Geen kranten gevonden</p>
        )}
        {data.kranten.map(krant => (
          <a href={process.env.REACT_APP_API_HOST + krant.pdf} target="_blank" rel="noopener noreferrer" key={krant.id}>{krant.title}</a>
        ))}
        <h3>Folders</h3>
        {!data.kranten.length && (
          <p>Geen folders gevonden</p>
        )}
        {data.folders.map(folder => (
          <a href={process.env.REACT_APP_API_HOST + folder.pdf} target="_blank" rel="noopener noreferrer" key={folder.id}>{folder.title}</a>
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = {
  getPublications,
};

const mapStateToProps = state => ({
  data: selectPublications(state),
  loading: selectLoading(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Publicaties);
