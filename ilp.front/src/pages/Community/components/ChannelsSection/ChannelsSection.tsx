import React from "react";
import SearchIcon from "../../../../components/Icons/SearchIcon";
import { ChannelsList } from "./ChannelsList/ChannelsList";
import { DirectsList } from "./DirectsList/DirectsList";
import { DirectItem } from "./DirectsList/DirectItem/DirectItem";
import "./ChannelsSection.css";

export const ChannelsSectioin : React.FC = () => {
    return (
        <section className="channels-section">
            <div className="channels-functions">
                <div className="channels-functions__container">
                    <SearchIcon/>
                    <input type="text" placeholder="Search channels..." className="channels-functions__input"/>
                </div>
            </div>
            <div className="chats">
                <ChannelsList/>
                <DirectsList/>
            </div>
            <div className="profile">
                <DirectItem direct={{name: "Мой профиль", status:"online", active: false}}/>
            </div>
        </section>
    );
}