import {View, Text, Image, Touchable, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

import AntIcon from 'react-native-vector-icons/AntDesign'
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons'
import FeatherIcon from   'react-native-vector-icons/Feather'




const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Post = (props) => {
  const [postOpen, setPostOpen] = React.useState(false);
  const [like,setLike] = React.useState(false);

  
  return (
    <View
      className="Post"
      style={{backgroundColor: 'white', marginVertical: 10, padding: 10,paddingBottom:0 }}>
          {/* header of the post  */}
      <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          {console.log("Tanay",typeof props.tags,props.image  )}
        <Image
          borderRadius={22}
          style={{
            height: 48,
            width: 48,
            marginRight: 10,
          }}
          source={{
            uri: props.dpImage,
          }}
        />
        <View>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 13,
            }}>
         {props.authorName}
          </Text>
          <Text
            style={{
              color: '#656565',

              fontSize: 12,
            }}>
        {props.authorTitle}
          </Text>
          <Text
            style={{
              color: '#656565',

              fontSize: 10,
            }}>
           {props.time}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          paddingHorizontal: 5,
        }}>
        <Text
          style={{
            marginTop: 10,
            color: '#2e2e2e',
            textAlign: 'left',
            width: postOpen ? width * 0.94 : width * 0.77,
            fontSize: 14,
          }}
          numberOfLines={postOpen ? null : 2}>
      {props.desc}
        
        </Text>
        
        <TouchableOpacity
          onPress={() => {
            setPostOpen(true);
          }}
          style={{display: postOpen ? 'none' : 'flex'}}>
          <Text style={{fontSize: 13}}>See more</Text>
        </TouchableOpacity>
        
      </View>
      {/* Hashtags */}
      <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:5 }}>
          {/* {props.tags((element,index) => {
              return(
                <Text style={{fontWeight:'bold',color:'#0a66c2',marginRight:3 }}>
              hello
            </Text>
              )
          } ) } */}
 <Text style={{fontWeight:'bold',color:'#0a66c2',marginRight:3 }}>{props.tags[0]} </Text>

           
     
      </View>
     
{/* Post Image */}
      <Image   resizeMode="contain" source={{uri:props.image}} style={{
          
          width:width,
          marginTop:10,
          alignSelf:'center',
          height:width*0.7
      }} />
{like ? (
    <View style={{paddingVertical:10,borderBottomWidth:1,borderColor:'#efefef',marginBottom:3  }}>
    <Text>
    <AntIcon name="like1" size={14}  color="#0a66c2"/>
    </Text>
</View>
 ) :null }





{/* Likes, comment, share and send  */}
      <View style={{flexDirection:'row',backgroundColor:'white',justifyContent:'space-between',paddingHorizontal:25,paddingVertical:5,    }}>

          <TouchableOpacity onPress={()=>{setLike(!like)} } style={{alignItems:'center' }}>
              {like ? <AntIcon name="like1" size={14}   color="#0a66c2"/> : <SimpleIcon name="like" size={14}  color="grey"/> }

<Text style={{fontSize:12,marginTop:3 }}>
    Like
</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{alignItems:'center'}}>
<Icon name="commenting-o" size={18}  color="grey"/>
<Text style={{fontSize:12,marginTop:3 }}>
    Comment
</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{alignItems:'center'}}>
<Icon name="share" size={18}  color="grey"/>
<Text style={{fontSize:12,marginTop:3 }}>
    Share
</Text>
          </TouchableOpacity>

          

          <TouchableOpacity style={{alignItems:'center'}}>
<FeatherIcon name="send" size={18}  color="grey"/>
<Text style={{fontSize:12,marginTop:3 }}>
    Send
</Text>
          </TouchableOpacity>

      </View>
    </View>
  );
};

export default Post;
