import React, { Component, PropTypes } from "react";
import { TextField, Translation } from "/imports/plugins/core/ui/client/components";

class PaystackSettingsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      settings: {
        apiSecretKey: "sk_test_1ad51a472f7065a3dc392facf8f6e642b5a359e4",
        apiPublicKey: "pk_test_fb8c618a8e31193b0999c68d41792fea0a804d03"
      }
    };

    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleStateChange(e) {
    const { settings } = this.state;
    settings[e.target.name] = e.target.value;
    this.setState({ settings });
  }


  render() {
    const { packageData } = this.props;
    const { settings } = this.state;

    return (
      <div>
        { !packageData.settings.apiKey &&
          <div className="alert alert-info">
            <Translation defaultValue="Paystack Credentials" i18nKey="admin.paymentSettings.paystackCredentials"/>
          </div>
        }

        <form onSubmit={this.props.onSubmit}>
          <TextField
            label="API Secret Key"
            name="apiSecretKey"
            type="text"
            onChange={this.handleStateChange}
            value={settings.apiSecretKey}
          />
          <TextField
            label="API Public Key"
            name="apiPublicKey"
            type="text"
            onChange={this.handleStateChange}
            value={settings.apiPublicKey}
          />

          <button className="btn btn-primary pull-right" type="submit">
            <Translation defaultValue="Save Changes" i18nKey="app.saveChanges"/>
          </button>
        </form>

      </div>
    );
  }
}

PaystackSettingsForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  packageData: PropTypes.object
};

export default PaystackSettingsForm;
