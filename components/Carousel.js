import React, { useEffect, useRef, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View, Dimensions } from "react-native";

const Carousel = () => {
    const flatlistRef = useRef();
    const screenWidth = Dimensions.get("window").width;
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            flatlistRef.current.scrollToIndex({
                index: (activeIndex + 1) % carouselData.length,
                animated: true,
            });
            setActiveIndex((activeIndex + 1) % carouselData.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [activeIndex]);

    const getItemLayout = (data, index) => ({
        length: screenWidth,
        offset: screenWidth * index,
        index: index,
    });

    const carouselData = [
        {
            id: "01",
            image: require("../assets/slider_1.jpg"),
        },
        {
            id: "02",
            image: require("../assets/slider_2.jpg"),
        },
        {
            id: "03",
            image: require("../assets/slider_3.jpg"),
        },
    ];

    const renderItem = ({ item, index }) => {
        return (
            <View>
                <Image
                    source={item.image}
                    style={{ height: 200, width: screenWidth }}
                />
            </View>
        );
    };

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / screenWidth);
        setActiveIndex(index);
    };

    const renderDotIndicators = () => {
        return carouselData.map((dot, index) => {
            if (activeIndex === index) {
                return (
                    <View
                        key={index}
                        style={{
                            backgroundColor: "purple",
                            height: 10,
                            width: 10,
                            borderRadius: 5,
                            marginHorizontal: 6,
                        }}
                    />
                );
            } else {
                return (
                    <View
                        key={index}
                        style={{
                            backgroundColor: "grey",
                            height: 10,
                            width: 10,
                            borderRadius: 5,
                            marginHorizontal: 6,
                        }}
                    />
                );
            }
        });
    };

    return (
        <View>
            <FlatList
                data={carouselData}
                ref={flatlistRef}
                getItemLayout={getItemLayout}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                pagingEnabled={true}
                onScroll={handleScroll}
            />

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: 30,
                }}
            >
                {renderDotIndicators()}
            </View>
        </View>
    );
};

export default Carousel;

const styles = StyleSheet.create({});
