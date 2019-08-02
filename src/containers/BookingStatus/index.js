import React, { Component } from 'react';
import { View, Text, StatusBar, ImageBackground, TouchableOpacity, Image, ScrollView, AsyncStorage, Alert } from 'react-native';
import * as AppConfig from '@AppConfig';
import * as validation from '@lib/validation';
import styles from './styles'
import { Actions, ActionConst } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bookUnBookVehicle, getBookingStatus } from '@actions/bookingStatus';
import { bookingStatusSelector } from '@selectors/bookingStatus';
import { bookingSelector } from '@selectors/booking';
import LoadingView from '../LoadingView';
import OfflineView from '../OfflineView';

/**
 * BookingStatus Component
 * @author SynsoftGlobal
 */

class BookingStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plateNumber: '',
            authToken: '',
        }
    }

    componentDidMount() {
        AsyncStorage.getItem("auth_token").then((value) => {
            if (value) {
                //let result = JSON.parse(value);
                this.setState({
                    authToken: value,
                });
                //getting booking status
                this.props.onGetBookingStatus(value);
            }
        }).done();
    }

    _onBackButton = () => {
        Actions.pop();
    }

    _onSettingButton = () => {
        Actions.settings({ type: ActionConst.RESET });
    }

/**
 * Booking Method
 */
    onUnBookVehicle = () => {
        Alert.alert(
            'Alert',
            'Are you sure you want to UnBook/Lock this Vehicle?',
            [
                { text: 'NO', onPress: () => console.log('No  Pressed'), style: 'cancel' },
                { text: 'YES', onPress: () => this.createUnBookkData() },
            ],
            { cancelable: false }
        )
    }

    createUnBookkData = () => {
        let data = {
            vehicle_id: this.props.bookingData.data.vehicle_id,
            action: AppConfig.UNBOOK_VAL,
        }
        this.props.onUnBookVehicle(data, this.state.authToken)
    }

    bookNow = () => {
        Actions.findVehicle({ cameFrom: 'other' })
    }

/**
 * Component render method
 */
    render() {
        const { bookingData, bookingStatus } = this.props;
        //console.warn('bookingData' + JSON.stringify(bookingData));
        let divisionDetail = bookingData.metaData ? bookingData.metaData.division_details : '';

        let vehcileImage = bookingData.metaData ? bookingData.metaData.image_url : '';
        if (vehcileImage && validation.validateImage(vehcileImage)) {
            vehcileImage = AppConfig.IMAGE_URL + vehcileImage;
        } else {
            vehcileImage = '';
        }
        return (
            <ImageBackground source={require('@res/img/bglogin.png')} style={styles.container}
                imageStyle={{ resizeMode: 'cover' }}>
                <StatusBar backgroundColor={AppConfig.statusBarColor} barStyle="light-content" />


                <View style={styles.headerBar}>
                    <TouchableOpacity onPress={() => this._onSettingButton()}>
                        <Image source={require('@res/img/toggle.png')} style={styles.backBtn} />
                    </TouchableOpacity>
                    <Image source={require('@res/img/logo.png')} style={styles.logo} />
                </View>


                {/**Internet connection view */}
                <OfflineView />

                {
                    bookingData && Object.keys(bookingData).length != 0 && (
                        <ScrollView>
                            <View style={styles.centerContent}>
                                <Image source={vehcileImage ? { uri: vehcileImage } : require('@res/img/car.png')}
                                    style={styles.vehicleImage} />

                                <Text style={styles.labelHeading}>BOOKING STATUS</Text>

                                <Text style={styles.labelText}>Owner: {divisionDetail ? divisionDetail.company_name : 'Owner name not found.'}</Text>
                                <Text style={styles.labelText}>Plate #: {bookingData.data ? bookingData.data.plate_number : ''}</Text>

                                <Text style={styles.labelHeading}>To end your use of the vehicle: exit, lock all doors, and press the unbook button.</Text>

                                <TouchableOpacity onPress={this.onUnBookVehicle} style={{ marginTop: '10%' }}>
                                    <ImageBackground style={styles.loginBtn} source={require('@res/img/loginbtn.png')}
                                        imageStyle={{ resizeMode: 'stretch' }}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                            <Text style={styles.btnLabel}>
                                                UNBOOK
                                     </Text>
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    )
                }

                {
                    bookingData && Object.keys(bookingData).length === 0 && (
                        <View style={styles.centerContent}>

                            <Text style={styles.labelHeading}>BOOKING STATUS</Text>
                            <Text style={[styles.labelText, { textAlign: 'center', fontSize: AppConfig.RF18, margin: 15 }]}>You have not booked any vehicle.</Text>
                            <TouchableOpacity onPress={this.bookNow} style={{ marginTop: '10%' }}>
                                <ImageBackground style={styles.loginBtn} source={require('@res/img/loginbtn.png')}
                                    imageStyle={{ resizeMode: 'stretch' }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                        <Text style={styles.btnLabel}>
                                            BOOK NOW
                                     </Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                    )
                }
                <LoadingView visible={bookingStatus.isFetching} />
            </ImageBackground>

        )
    }
}

/**
 * Props Methods
 */

// getting props
function mapStateToProps(state) {
    return {
        bookingStatus: bookingStatusSelector(state),
        bookingData: bookingSelector(state),
    }
}

// sending user actions
function mapDispatchToProps(dispatch) {
    return {
        onGetBookingStatus: (authToken) => dispatch(getBookingStatus(authToken)),
        onUnBookVehicle: (data, authToken) => dispatch(bookUnBookVehicle(data, authToken))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingStatus)