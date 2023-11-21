import { StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding:24,
    },
    nomeEvento: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight:'bold',
        marginTop:48,
    },
    textoEvento: {
        color:'#6b6b6b',
        fontSize: 16,
    },
    input: {
        flex:1,
        height:56,
        backgroundColor:'#1F1E25',
        borderRadius:5,
        color:'#FFFFFF',
        padding: 16,
        fontSize: 16,
        marginRight: 12,
    },
    button:{
        width: 56,
        height: 56,
        borderRadius:5,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent:'center'
    },
    buttonText:{
        color:'#FFF',
        fontSize:14
    },
    form:{
        width:'100%',
        flexDirection:'row',
        marginTop:40,
        marginBottom: 40,

    },
    listEmpty:{
        color:'#FFF',
        fontSize:14,
        textAlign:'center'
    }
  });
  