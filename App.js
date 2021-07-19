import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Flag, Container, Icon, Grid, Input, Image, Header, Divider,
Label } from "semantic-ui-react";



class App extends Component {
  render() {
    return (
      <div>
      <br/>
      <Grid container columns={4}>
      <Grid.Column>
      <Flag name="id"/>
      <Icon name="angle left"/><Icon name="angle right"/>
      </Grid.Column>
      <Grid.Column>
      <Input fluid placeholder="Search..." icon="star"/>
      </Grid.Column>
      <Grid.Column>
      </Grid.Column>

      <Grid.Column>
      <Container textAlign="right">
      <Header as="h4">
      <Image src="https://react.semantic-ui.com/images/avatar/large/patrick.png" circular/>
      Patrick
      </Header>
      </Container>
      </Grid.Column>
      </Grid>
      <Divider horizontal>SELAMAT DATANG!!!</Divider>
      <Container textAlign="right">
      <a class="ui teal tag label">Sport</a>
      </Container>
      <br/><br/>
      <Container textAlign="center">
      <p>
      Ducati tengah menunggu sidang Pengadilan Banding FIM tentang komponen aerodinamis.
      Andai gugatan para rivalnya diterima, akankah Ducati akan melanjutkan ke CAS
      (Pengadilan Arbitrase Olahraga)? Suzuki, Honda, KTM, dan Aprilia memprotes
      penggunaan komponen aero di motor Desmosedici Andrea Dovizioso dan Danilo
      Petrucci dalam balapan pertama MotoGP 2019 di Qatar karena dianggap ilegal.
      Pada prosesnya, Dovozioso tampil sebagai pemenang usai mengalahkan Marc Marquez.
      Keempat tim meyakini, komponen itu memiliki fungsi aerodinamis, dan menghasilkan
      downforce, yang membantu motor melesat di trek. Sementara Ducati bersikukuh
      komponen itu cuma untuk mendinginkan ban dan sudah disetujui Technical Director
      sebelum balapan. Pada awalnya, protes keempat tim itu ditolak oleh steward MotoGP
      sehingga dibawa ke pengadilan banding FIM. Sidang itu sendiri akan dilakukan
      sebelum seri kedua di Argentina digelar pada 29-31 Maret Mendatang. Manajer umum
      Ducati Gigi Dall'Igna berkukuh tidak ada yang ilegal dengan komponen itu. Namun,
      seandainya pengadilan mengabulkan gugatan tersebut Ducati akan mempertimbangkan
      melanjutkan kasus ini ke CAS. "Di dalam federasi, derajatnya berakhir di Pengadilan
      Banding FIM. Anda harus pergi ke CAS, yang adalah pengadilan olahraga tapi di dalam
      kasus ini Anda keluar dari perimeter FIM," Dall'Igna mengungkapkan kepada MotoGP.com
      "Saya bahkan tidak ingin memikirkan sampai ke titik ini. Kami sangat yakin bahwa kami
      tidak melanggar regulasi kok, dan yakin kami tidak melihat adanya alasan mengapa
      pengadilan banding bisa memutuskan secara berbeda."
      </p>
      </Container>
      <br/>
      <Container textAlign="center">
      <a class="ui teal icon button"> <Icon name="plus"/> Tambahkan Tautan Ke List</a>
      </Container>
      </div>
    );
  }
}


export default App;
