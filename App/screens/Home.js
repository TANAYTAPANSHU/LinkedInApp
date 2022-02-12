import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Dimensions } from 'react-native';
import Post from '../components/Post';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height; 


const PostData = [{
  dpImage :  'https://firebasestorage.googleapis.com/v0/b/clone-56d99.appspot.com/o/WhatsApp%20Image%202022-02-11%20at%202.06.32%20PM.jpeg?alt=media&token=d3da6ab9-eaa4-4bd4-a0b3-da9a2632714d',
  authorName:'Aayush',
  authorTitle: 'SDE at Mela (YC S-19)',
  time:'6h',
  desc: "It's finally CA Prashant Shah. There are things/lessons I had like to share on this achievement; 1. It's tough. But you will get there.; 2. Don't stress about the number of attempts you will have to take to be a CA. 3. CA also means Casually Available🙂",
  tags:["#amazon","#development","#tech" ],
  image: 'https://media-exp1.licdn.com/dms/image/C4E22AQF4YUKUmFp7YQ/feedshare-shrink_800/0/1644552498820?e=1647475200&v=beta&t=seNJvA710IGmbPkBA4Dj72VpAAuoprDEI-vEIDM9_2w'
},
{
  dpImage :  'https://media-exp1.licdn.com/dms/image/C4D03AQGQrH7dsvo1qQ/profile-displayphoto-shrink_100_100/0/1613400782822?e=1649894400&v=beta&t=FbdZlC3fp_ITQSuvZkH3IEqYNA643ByIMPDoAsEhYsI',
  authorName:'Gizal Joan',
  authorTitle: 'SDE at Amazon',
  time:'5h',
  desc:'I have silently wanted this title for a while now. I am elated to announce that I have recently joined',
  tags:["#amazon","#development","#tech" ],
  image: 'https://media-exp1.licdn.com/dms/image/C4D22AQEArzbcQbW3PA/feedshare-shrink_800/0/1644582722282?e=1647475200&v=beta&t=nPvMDdpwBHEAACsZYfsEBX0d8r3dLOW3jEQ_1SHZQ60'
}

,
{
  dpImage :  'https://media-exp1.licdn.com/dms/image/C4E03AQFKVrhpnAvEFg/profile-displayphoto-shrink_100_100/0/1607596854630?e=1649894400&v=beta&t=3sTKEmBS6k8ysJtKIn9ncIMV_J7kaYjtoAcpihgQDcs',
  authorName:'Saumya Sharma',
  authorTitle: 'Engineer @Bajaj',
  time:'1d',
  desc: "It's finally CA Prashant Shah. There are things/lessons I had like to share on this achievement; 1. It's tough. But you will get there.; 2. Don't stress about the number of attempts you will have to take to be a CA. 3. CA also means Casually Available🙂",
  tags:["#amazon","#development","#tech" ],
  image: 'https://media-exp1.licdn.com/dms/image/C4D22AQEIT2Eu-GNGIQ/feedshare-shrink_800/0/1644593047945?e=1647475200&v=beta&t=LYET-rAxHKSc98aYBK5sy5KCQG7jNdmBXz-dAMzv3Tk'
}
,
{
  dpImage :  'https://media-exp1.licdn.com/dms/image/C5603AQHjxuaIgu2qjQ/profile-displayphoto-shrink_100_100/0/1627497104332?e=1649894400&v=beta&t=4jJcr7-fx6llqdHcDs1mKBHKM19tSMHeuX_GKUMcHPQ',
  authorName:'Abhishek Sharma',
  authorTitle: 'Engineer @Bajaj',
  time:'1d',
  desc:'With great joy, I am so excited to join,Truminds Software Systems, Talking about my past years, it has been a rollercoaster. Navigating pandemics, taking care of the health, and getting demotivation with many rejections has been HARD! It is tough to keep pushing when you dont see a lot of success. Nevertheless, now it is going to be an amazing experience onwards and this marks the beginning of my foray into the corporate sector ',
  tags:["#amazon","#development","#tech" ],
  image: 'https://media-exp1.licdn.com/dms/image/C5622AQFj-HZam-L1Sw/feedshare-shrink_800/0/1644479900104?e=1647475200&v=beta&t=nhzlouKvYYGyzbqlKdrq-zn0wg8unbIxaBofIM4xmnQ'
}

] 

const Home = () => {
    const [text, onChangeText] = React.useState("Seach Something");
  return (
    <ScrollView style={{backgroundColor:'#e9e6df',flex:1}}>
    <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle='light-content'
        showHideTransition='slide'
        />
      
    <View className="header" style={{flexDirection:'row',alignItems:'center',backgroundColor:'#fff',width:width,padding:10 }}>
  <Image
  borderRadius={18}
  style={{
    height:35,
    width:35,
    alignSelf:'center'
  }}
  source={{uri:'https://firebasestorage.googleapis.com/v0/b/clone-56d99.appspot.com/o/WhatsApp%20Image%202022-02-11%20at%202.06.32%20PM.jpeg?alt=media&token=d3da6ab9-eaa4-4bd4-a0b3-da9a2632714d'}}
  />
  <TextInput placeholder="useless place"     onChangeText={onChangeText}
        value={text} style={{backgroundColor:'#edf4f7',width:width*0.65,paddingVertical:5,borderRadius:5,color:"grey",marginHorizontal:15,fontWeight:'bold'  }}/>

<Icons name="message-text" size={25} color="#656565"  style={{marginLeft:width*0.03}}/>
  
  

    </View>
    

 <View>
   {PostData.map((element,index) =>{
     return(
      <Post  key={index} dpImage={element.dpImage}  authorName={element.authorName}  authorTitle={element.authorTitle}  time={element.time}  desc={element.desc}  image={element.image}  tags={element.tags}  />
     ) 
   } ) }

 </View>

    
    </ScrollView >
  )
}

export default Home