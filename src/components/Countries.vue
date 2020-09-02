<template>
<div class="countries">
    <div class="container">
        <div class="countries__title">
            THE LIST OF COUNTRIES IN WHICH V-TELL PROVIDES COMMUNICATION SERVICES
        </div>
        <div class="countries__content mb-1">
            Afghanistan, Albania, Algeria, Andorra, Angola, Anguilla, Antigua and Barbuda, Argentina, Armenia, Aruba, Australia, Austria, Azerbaijan, Bahamas, Bahrain, Bangladesh, Barbados, Belarus, Belgium, Belize, Bermuda, Bhutan, Bolivia, Bosnia and Herzegovina, Botswana, Brazil, British Virgin Islands, Brunei, Bulgaria, Burkina Faso, Burundi, Cabo Verde, Cambodia, Cameroon, Canada, Cayman Islands, Central African Republic, Chad, Chech Republic, Chile, China, Colombia, Comoros, Costa Rica, Cote d`Ivoire, Croatia, Cuba, Cyprus, Democratic Republic of the Congo, Denmark, Djibouti, Dominican Republic, Dominika, Ecuador, Egypt, El Salvador, Equatorial Guinea, Estonia, Eswatini (Swaziland), Ethiopia, Faroe Islands, Fiji, Finland, France, French Guiana, French Polynesia, Gabon, Gambia, Georgia, Germany, Ghana, Gibraltar, Greece, Grenada, Guadeloupe, Guam, Guatemala, Guernsey, Guinea, Guinea-Bissau, Guyana, Haiti, Honduras, Hong Kong, Hungary, Iceland, India, Indonesia, Iran, Iraq, Ireland, Isle of Man, Israel, Italy, Jamaica, Japan, Jersey, Jordan, Kazakhstan, Kenya, Kiribati, Kosovo, Kuwait, Kyrgyzstan, Laos, Latvia, Lebanon, Lesotho, Liberia, Libya, Liechtenstein, Lithuania, Luxembourg, Macao, Madagascar, Malawi, Malaysia, Maldives, Mali, Malta, Martinique, Mauritania, Mauritius, Mayotte, Mexico, Moldova, Monaco, Mongolia, Montenegro, Montserrat, Morocco, Mozambique, Myanmar, Namibia, Nauru, Nepal, Netherlands, Netherlands Antilles (Saba, Curacao, Bonaire, Sint Eustatius, Saint Martin), New Zealand, Nicaragua, Niger, Nigeria, North Macedonia, Northen Mariana Islands, Norway, Oman, Pakistan, Palestine State, Panama, Papua New Guinea, Paraguay, Peru, Philippines, Poland, Portugal, Puerto Rico, Qatar, Republic of the Congo, Reunion (La), Romania, Russia, Rwanda, Republic of, Saint Barthélemy (French West Indies), Saint Kitts and Nevis, Saint Lucia, Saint Martin (French West Indies), Saint Vincent and the Grenadines, Samoa, Saudi Arabia, Senegal, Serbia, Seychelles, Sierra Leone, Singapore, Slovakia, Slovenia, Somalia, South Africa, South Korea, South Sudan, Spain, Sri Lanka, Sudan, Suriname, Sweden, Switzerland, Syria, Taiwan, Tajikistan, Tanzania, Thailand, Timor-Leste, Togo, Trinidad and Tobago, Tunisia, Turkey, Turkmenistan, Turks and Caicos islands, Uganda, Ukraine, United Arab Emirates, United Kingdom, United States of America, United States Virgin Islands, Uruguay, Uzbekistan, Vanuatu, Venezuela, Vietnam, Yemen, Zambia, Zimbabwe.
        </div>
        <div class="countries__title">
            THE LIST OF COUNTRIES WHOSE PHONE NUMBERS ARE AVAILABLE FOR ADDING TO THE V-TELL SIM CARD
        </div>
        <div class="countries__content mb-2">
            Albania, Angola, Argentina, Australia, Austria, Belarus, Belgium, Brazil, Bulgaria, Cambodia, Canada, Cayman Islands, Chech Republic, China, Colombia, Costa Rica, Croatia, Cyprus, Denmark, Dominican Republic, El Salvador, Estonia, Finland, France, Georgia, Germany, Ghana, Greece, Grenada, Guatemala, Hong Kong, Hungary, Iceland, Ireland, Israel, Italy, Jamaica, Japan, Kazakhstan, Kenya, Latvia, Lithuania, Luxembourg, Macao, Malaysia, Malta, Mexico, Netherlands, New Zealand, Nigeria, Norway, Panama, Peru, Philippines, Poland, Portugal, Puerto Rico, Romania, Russia, Singapore, Slovakia, Slovenia, South Africa, South Korea, Spain, Sweden, Switzerland, Thailand, Trinidad and Tobago, Turkey, Ukraine, United Kingdom, United States of America, Venezuela, Vietnam.
        </div>
    </div>
</div>  
</template>

<style lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_base.scss';

.countries {
    display: flex;
    justify-content: center;
    color: $vwhite2;
    text-align: justify;
    line-height: 20px;

    @media(max-width: 900px) {
        margin: 0 1.5rem;
    }

    &__title {
        letter-spacing: 1px;
        text-align: center;
        margin-bottom: .8rem;
    }

    &__content {
        font-size: 13px;
        
    }
}

</style>