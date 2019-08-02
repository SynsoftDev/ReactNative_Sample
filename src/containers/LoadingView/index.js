import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet, Text, Modal,Alert } from 'react-native';
import * as AppConfig from '@AppConfig';


/**
 * API Loading Component
 * @author SynsoftGlobal
 */

export default class LoadingView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleModal: false,
        };
    }

    componentDidMount(){
     this.setState({visibleModal:this.props.visible});
    }

    render() {
        const { visible } = this.props;

        return (
            <Modal
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    {!visible}
                }}>
                <View style={{
                    flex: 1, alignItems: 'center', justifyContent: 'center',
                    backgroundColor: 'rgba(0,0,0,0.5)'
                }}>
                    <View style={styles.loading}>
                        <View style={styles.loaderContainer}>
                            <ActivityIndicator size="large" color={AppConfig.divider} />
                            <Text style={styles.loadingText}>Please wait...</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    loaderContainer: {
        marginRight: 20,
        marginLeft: 20,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: AppConfig.primaryColor,
        width: 130,
        height: 130,
        backgroundColor: AppConfig.white,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingText: {
        fontSize: AppConfig.RF16,
        marginTop: 20,
        color: AppConfig.blackLight,
        fontFamily: AppConfig.MONTSERRAT_REGULAR,
        fontWeight: '200',
    }
})