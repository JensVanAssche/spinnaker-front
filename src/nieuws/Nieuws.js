import React from 'react';
import { connect } from 'react-redux';
import { getAll } from './actions';
import { selectData, selectLoading } from './selectors';
import Entry from './nieuwsentry/Entry';

class Nieuws extends React.Component {
  state = { loading: true };

  componentDidMount() {  
    this.props.getAll().then(
      this.setState({ loading: false })
    );
  }

  render() {
    const { data, loading } = this.props;

    if (loading) return null;

    return (
      <div className="nieuws content ui container">
        <h2>Nieuws</h2>
        {!this.state.loading && data.map(entry => (
          <Entry id={entry.id} title={entry.title} date={entry.date} body={entry.body} key={entry.id} />
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = {
  getAll,
};

const mapStateToProps = state => ({
  data: selectData(state),
  loading: selectLoading(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nieuws);
