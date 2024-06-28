import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { UsersappContext } from './context/AppContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListItem } from '@rneui/base';

export default function TelaSeguidores() {
    const { usersapp, buscarUsersapp, atualizacao, apagarUsersapp } = useContext(UsersappContext);

    useEffect(() => {
        buscarUsersapp();
    }, []);

    // Função para obter uma URL específica baseada no username
    const getPhotoUrlByUsername = (username) => {
        switch (username) {
            case 'walter_white':
                return 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/streams/2013/August/130808/6C8558749-130808-walter-white-tease.jpg';

            case 'jesse_pinkman':
                return 'https://static.wikia.nocookie.net/breakingbad/images/c/ca/Jesse_Season_5B.jpg/revision/latest?cb=20220611094739';

            case 'jon_snow':
                return 'https://static.wikia.nocookie.net/gameofthrones/images/d/da/Jon_Snow_perfil_2.jpg/revision/latest?cb=20220217225407&path-prefix=pt-br';

            case 'daenerys_targaryen':
                return 'https://www.rbsdirect.com.br/imagesrc/25216908.jpg?w=700';

            case 'sheldon_cooper':
                return 'https://static.wikia.nocookie.net/fictionalcharacters/images/0/06/Sheldon_Cooper.png/revision/latest?cb=20130926025319';

            case 'leonard_hofstadter':
                return 'https://observatoriodocinema.uol.com.br/wp-content/plugins/seox-image-magick/imagick_convert.php?width=904&height=508&format=.jpg&quality=91&imagick=uploads-observatoriodocinema.seox.com.br/2022/09/13779_quantos-anos-tem-leonard-hofstadter-de-the-big-bang-theory_28-05-2021-2-1200x675.jpg';

            case 'rachel_green':
                return 'https://static.wikia.nocookie.net/assista-series/images/a/a3/Rachel-Green-rachel-green-34203848-1024-768.png/revision/latest?cb=20150609170121&path-prefix=pt-br';

            case 'ross_geller':
                return 'https://static.wikia.nocookie.net/assista-series/images/1/1d/D6cb762e-5493-4e09-bd86-8137fc953d8d.jpg/revision/latest?cb=20150608175909&path-prefix=pt-br';

            case 'tony_soprano':
                return 'https://static.wikia.nocookie.net/sopranos/images/c/c2/Tony_Soprano.jpg/revision/latest?cb=20211117185559';

            case 'carmela_soprano':
                return 'https://images.squarespace-cdn.com/content/v1/5e8f7574c4d500235a3552cf/1629748602442-YKQP4FJPCHZ8BOCI47RO/210881646_489694008768865_578223575100452526_n.jpg?format=750w';

            case 'dexter_morgan':
                return 'https://i0.wp.com/vivernaplenitude.wordpress.com/wp-content/uploads/2021/02/dexter-morgan-1574-1.jpg?resize=1400%2C1050&ssl=1';

            case 'debra_morgan':
                return 'https://static.wikia.nocookie.net/dexter/images/0/0e/Debra_Morgan.jpg/revision/latest?cb=20231229235627&path-prefix=pt-br';

            case 'michael_scott':
                return 'https://tm.ibxk.com.br/2021/11/18/18155820206454.jpg';

            case 'dwight_schrute':
                return 'https://s2-monet.glbimg.com/qBZfwcrlIyqdFVzSB-JY3_jVK6w=/0x0:900x575/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e7c91519bbbb4fadb4e509085746275d/internal_photos/bs/2023/B/u/44ZcZNT26O57APcMJi6w/captura-de-tela-2023-07-11-as-08.53.29.png';

            case 'jim_hopper':
                return 'https://conteudo.imguol.com.br/c/entretenimento/86/2019/07/05/jim-hopper-david-harbour-na-terceira-temporada-de-stranger-things-1562343903266_v2_1170x540.jpg';

            case 'tyrion_lannister':
                return 'https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/tyrion-lannister-1920.jpg?w=1200';

            case 'arya_stark':
                return 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/arya-stark.jpg?w=1220&h=674&crop=1';

            case 'sherlock_holmes':
                return 'https://cartanaescola.com.br/wp-content/uploads/2022/10/Biografia-de-Sherlock-Holmes.jpg';

            case 'john_watson':
                return 'https://static.wikia.nocookie.net/thesherlock/images/7/7a/29510_martin-freeman-sherlock.jpg/revision/latest?cb=20131220204522';

            default:
                return 'https://st3.depositphotos.com/4111759/13425/v/1600/depositphotos_134255588-stock-illustration-empty-photo-of-male-profile.jpg'; // URL padrão ou tratamento para casos não previstos
        }
    };

    return (
        <SafeAreaView>
            <FlatList
                data={usersapp}
                extraData={atualizacao}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ListItem bottomDivider>
                        <Image
                            source={{ uri: getPhotoUrlByUsername(item.username.toLowerCase()) }} // Obtém a URL baseada no username
                            style={styles.avatar}
                        />
                        <ListItem.Content style={styles.item}>
                            <ListItem.Title>{item.username}</ListItem.Title>
                            <ListItem.Subtitle>{item.nome}</ListItem.Subtitle>
                            <Text>{item.status}</Text>
                        </ListItem.Content>
                    </ListItem>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
});
