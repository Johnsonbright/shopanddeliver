import React, {useState, useRef} from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

const OnboardingScreen1 = () => {

   const navigation = useNavigation()
   return(
      <LinearGradient
    colors={['#1074FD', '#0D38CF']} 
    start={{ x: 0, y: 0 }} // Top-left
    end={{ x: 0, y: 1 }} // Bottom-left
    locations={[0, 0.5, 1]} 
    style={styles.gradient1}
    >
      {/* Adding the grid (vertical and horizontal lines) */}
    <View style={styles.grid}>
      {/* Vertical lines */}
      {[...Array(50)].map((_, index) => (
        <View
          key={index}
          style={[
            styles.line,
            { left: `${(index + 1) * 7}%`, height: height, width: 1 }, // Full screen height
          ]}
        />
      ))}
      {/* Horizontal lines */}
      {[...Array(50)].map((_, index) => (
        <View
          key={index}
          style={[
            styles.line,
            { top: `${(index + 1) * 3}%`, width: width, height: 1 }, // Full screen width
          ]}
        />
      ))}
    </View>

    <View style={styles.screen}>
    <View >
      <TouchableOpacity
        onPress={() => navigation.navigate("Layout")}
         style={{ zIndex: 1, elevation: 1 }} 
      >
      <Image style={styles.skip} source={require("../assets/skip.png")}/>
      </TouchableOpacity>
      
    <View style={{width:250, marginRight:100, marginTop: 5 }}>
    <Text style={[styles.title, {fontWeight: 800, fontSize: 40, lineHeight:43, letterSpacing: 0.5 }]}>Shop, Deliver & Discover</Text>
    </View>
    <View style={{width:275, top: -5, left: 7}}>
    <Text style={[styles.description, {fontSize:18, weight: 400, lineHeight: 24, letterSpacing: 0.5}]}>
      Find amazing deals, stores, hotels, restaurants, and services in your area.
    </Text>
    </View>
    </View>
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center', padding:20}}>
      <View style={{position: 'relative'}}>
       <Image source={require('../assets/onboard1/shopping.png')} style={styles.shopping} />
      </View>
      <View style={{ bottom:450, zIndex:10, right:150}}>
      <Image style ={{paddingBottom:10}}
         source={require('../assets/onboard1/goldspline.png')}/>
      </View>
     
      <View style={{
         position:'absolute',
         bottom:400,
         right:100,
         backgroundColor: '#f5f5f5',
         }}>
         <Image source={require('../assets/onboard1/bag.png')} style={styles.bag}/> 
      </View>
    </View>
  
      <View style={styles.swipe}>
         <Image source={require('../assets/swipeleft.png')}/>
      </View>
  </View>
  </LinearGradient>
 
   )
 
  };

  
 
const OnboardingScreen2 = () => {

   const navigation= useNavigation()
   return(
    <View style={[styles.screen, { backgroundColor: "#191045" }]}>
    {/* Adding the grid (vertical and horizontal lines) */}
    <View style={styles.grid}>
      {/* Vertical lines */}
      {[...Array(50)].map((_, index) => (
        <View
          key={`vertical-${index}`}
          style={[
            styles.line,
            { left: `${(index + 1) * 7}%`, height: height, width: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.05)'
          }, // Full screen height
          ]}
        />
      ))}
      {/* Horizontal lines */}
      {[...Array(50)].map((_, index) => (
        <View
          key={`horizontal-${index}`}
          style={[
            styles.line,
            { top: `${(index + 1) * 3}%`, width: width, height: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.05)' }, // Full screen width
          ]}
        />
      ))}
    </View>

    <View style={{ position: "relative" }}>
       <TouchableOpacity
       onPress={() => navigation.navigate("Layout")}
        style={{ zIndex: 1, elevation: 1 }} 
        >
        <View style={{ position: "absolute", top: -70, left: 14 }}>
        <Image style={styles.skip} source={require("../assets/skip.png")} />
        </View>
      </TouchableOpacity>
     
      <Image
        source={require("../assets/onboard2/gift.png")}
        style={styles.image2}
      />
      <View
        style={{
          position: "absolute",
          bottom: -250,
          left: 180,
          transform: [{ rotate: "2.38deg" }],
        }}
      >
        <Image source={require("../assets/onboard2/bluespline2.png")} />
      </View>
    </View>
    <View style={{ width: 315, height: 86, top: -50, left: 7 }}>
      <Text
        style={{
          fontWeight: 800,
          fontSize: 40,
          lineHeight: 43,
          letterSpacing: 0.5,
          color: "#fff",
        }}
      >
        Send & Receive Packages
      </Text>
    </View>
    <View style={{ width: 267, height: 60, top: -50, left: -25 }}>
      <Text
        style={[
          styles.description,
          { fontWeight: 400, fontSize: 17, lineHeight: 22.4 },
        ]}
      >
        The best way to send and receive your packages at affordable prices.
      </Text>
    </View>
    <View style={[styles.swipe, { width: 158, height: 41.82, top: -20 }]}>
      <Image source={require("../assets/swipeleft.png")} />
    </View>
  </View>
   )
  
};



const OnboardingScreen3 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.screen, { backgroundColor: '#F2F4F7' }]}>
      {/* Adding the grid (vertical and horizontal lines) */}
      <View style={styles.grid}>
        {/* Vertical lines */}
        {[...Array(50)].map((_, index) => (
          <View
            key={`vertical-${index}`}
            style={[
              styles.line,
              { left: `${(index + 1) * 7}%`, height: height, width: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
             }, // Full screen height
            ]}
          />
        ))}
        {/* Horizontal lines */}
        {[...Array(50)].map((_, index) => (
          <View
            key={`horizontal-${index}`}
            style={[
              styles.line,
              { top: `${(index + 1) * 3}%`, width: width, height: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.05)' }, // Full screen width
            ]}
          />
        ))}
      </View>

      <View style={{ flex: 1, alignContent: 'center', top: 80 }}>
        <View style={{ maxWidth: 300, maxHeight: 80, top: 9, left: 7 }}>
          <Text
            style={{
              fontWeight: 800,
              fontSize: 40,
              lineHeight: 43,
              letterSpacing: 0.5,
            }}
          >
            Make Money as a Runner
          </Text>
        </View>
        <View style={{ width: 265, height: 98, top: 22, left: 7 }}>
          <Text style={{ fontWeight: 400, fontSize: 16, lineHeight: 22.4 }}>
            Whether you're full-time or part-time, turn your time and resources
            into earnings.
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          top: -40,
          position: 'relative',
        }}
      >
        <Image
          source={require('../assets/onboard3/cyclist.png')}
          style={styles.image3}
        />

        <View
          style={{
            position: 'absolute',
            bottom: 545,
            left: 200,
            transform: [{ rotate: '2.38deg' }],
          }}
        >
          <Image source={require('../assets/onboard3/bluespline.png')} />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Layout')}
        style={{ zIndex: 1, elevation: 1 }}
      >
        <View style={{ margin: 50 }}>
          <Image
            style={{
              width: 320,
              height: 75,
              top: -40,
              left: 18,
              borderRadius: 46.47,
            }}
            source={require('../assets/onboard3/getstarted.png')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};


const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);


  const screens = [<OnboardingScreen1 key="1" />, <OnboardingScreen2 key="2" />, <OnboardingScreen3 key="3" />];

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    console.log("🚀 ~ handleScroll ~  offsetX:",  offsetX)
    const index = Math.round(offsetX / width);
    setCurrentIndex(index);
  };

  return (
      <View style={{flex:1, position:'relative'}}>
        <FlatList
        data={screens}
        renderItem={({ item }) => item}
        horizontal
        pagingEnabled
        ref={flatListRef}
        onScroll={handleScroll}
        contentContainerStyle={{height: height * 1}}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
    />
       {/* Indicator */}
           <View style={styles.indicatorContainer}>
               {screens.map((_,index) => (
                  <View
                    key={index}
                     style={[styles.indicator, {
                       backgroundColor: currentIndex === index ? "yellow" : "gray"
                     }]}
                  />
               ))}
           </View>
      </View>
    
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  gradient1: {
    flex: 1,
    width: width,
    height: height
    
  },
  grid: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1, // Ensure it is above the gradient but below content
  },
  line: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // White lines with transparency
  },
  screen: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: width,
    // height:height
  },
  shopping: {
    width: 389.42,
    height: 500,
    resizeMode: 'contain',
    left: -30,
    top:-10,
    zIndex: 1,

  },
  swipe: {
    width: 158,
    height: 41.82,
    top: -70,
    paddingTop: -10,
    paddingRight: 30.21,
   
  },
  indicatorContainer: {
    position:"absolute",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 10,
    bottom: 30,
    left: 150
  },
  indicator: {
    width: 30,
    height: 6,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  skip: {
   width: 75,
   height: 42,
   top: 25,
   left: 287,


  },
  bag: {
    position: 'absolute', 
    zIndex: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  getStartedButton: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
  },
  getStartedText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


