/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Picker, Text} from 'react-native';
import {connect} from 'react-redux';
import {feedbackUpdate, feedbackSend} from '../actions';
import {CardSection, Input, Button, Card} from './common';

class FeedbackForm extends Component {
  onButtonPress() {
    const {name, subject, comment, rating} = this.props;

    this.props.feedbackSend({
      name,
      subject,
      comment,
      rating: rating || '10 / 10',
    });
  }

  render() {
    return (
      <View>
        <Card>
          <CardSection />
          <CardSection />
          <CardSection>
            <Input
              label="Name"
              placeholder="ex. Ishie Eswar"
              value={this.props.name}
              onChangeText={(value) =>
                this.props.feedbackUpdate({prop: 'name', value})
              }
            />
          </CardSection>

          <CardSection>
            <Input
              label="Subject"
              style={styles.textStyle}
              placeholder="ex. Navigation"
              value={this.props.subject}
              onChangeText={(value) =>
                this.props.feedbackUpdate({prop: 'subject', value})
              }
            />
          </CardSection>

          <CardSection>
            <Input
              label="Comment"
              placeholder="ex. Routing works well!"
              value={this.props.comment}
              onChangeText={(value) =>
                this.props.feedbackUpdate({prop: 'comment', value})
              }
            />
          </CardSection>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Arial',
              fontWeight: '500',
              paddingTop: 15,
              paddingLeft: 20,
            }}>
            Rate us out of 10!
          </Text>
          <CardSection>
            <Picker
              style={{flex: 1}}
              selectedValue={this.props.rating}
              onValueChange={(value) =>
                this.props.feedbackUpdate({prop: 'rating', value})
              }>
              <Picker.Item label="0 / 10" value="0 /1 0" />
              <Picker.Item label="1 / 10" value="1 / 10" />
              <Picker.Item label="2 / 10" value="2 / 10" />
              <Picker.Item label="3 / 10" value="3/ 10" />
              <Picker.Item label="4 / 10" value="4 / 10" />
              <Picker.Item label="5 / 10" value="5 / 10" />
              <Picker.Item label="6 / 10" value="6 / 10" />
              <Picker.Item label="7 / 10" value="7 / 10" />
              <Picker.Item label="8 / 10" value="8 / 10" />
              <Picker.Item label="9 / 10" value="9 / 10" />
              <Picker.Item label="10 / 10" value="10 / 10" />
            </Picker>
          </CardSection>

          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Send To Team
            </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {name, subject, comment, rating} = state.feedbackForm;

  return {name, subject, comment, rating};
};

const styles = {
  commentBoxStyle: {
    flex: 1,
  },
};

export default connect(mapStateToProps, {feedbackUpdate, feedbackSend})(
  FeedbackForm,
);
