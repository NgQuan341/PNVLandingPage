import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table, Button } from 'reactstrap';

class AdminContent extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Content table
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Image</th>
                    <th>Display</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Lời kêu gọi donate</td>
                    <td>Hãy chung tay cùng chúng tôi mang lại nhiều đóng góp hơn cho cộng đồng, chúng tôi rất cần sự tài trợ của các bạn!</td>
                    <td>hinh1.jpg</td>
                    <td>
                      <Badge color="success">display</Badge>
                    </td>
                    <td><Link to="content/1"><Button block color="primary" >Edit</Button></Link></td>
                  </tr>
                  <tr>
                    <td>Giới Thiệu</td>
                    <td>Passerelles numériques (PN) là một tổ chức phi chính phủ
                của Pháp, được thành lập năm 2005 và đang hoạt động tại 3
                quốc gia châu Á: Campuchia, Philippines và Việt Nam. Với
                sứ mệnh là tạo điều kiện cho các thanh niên có hoàn cảnh
                khó khăn được học hành, được đào tạo chuyên môn và đào tạo
                kỹ năng trong lĩnh vực kỹ thuật số bằng cách phát huy tối
                đa tiềm năng cũng như sức mạnh ý chí của các em. Chúng tôi
                cũng nỗ lực giúp các em có việc làm nhằm giúp các em và
                gia đình thoát khỏi đói nghèo một cách bền vững, góp phần
                vào sự phát triển kinh tế xã hội chung của đất nước.Được
                thành lập từ năm 2010, Passerelles numériques Việt Nam
                (PNV) đã cung cấp chương trình đào tạo CNTT miễn phí về
                toàn bộ chi phí đào tạo, ăn ở và sinh hoạt kéo dài 3 năm
                với các chuyên ngành Kiểm thử Tự động, Thiết kế Web và Lập
                trình thiết bị di động cho các thanh niên có hoàn cảnh khó
                khăn ở 7 tỉnh miền Trung Việt Nam (Quảng Bình, Quảng Trị,
                Đà Nẵng, Quảng Nam, Quảng Ngãi, Bình Định và Kon Tum) với
                hơn 50% là các sinh viên nữ.</td>
                    <td>hinh2.jpg</td>
                    <td>
                      <Badge color="success">display</Badge>
                    </td>
                    <td><Button block color="primary" >Edit</Button></td>
                  </tr>
                  <tr>
                    <td>ITnuoiIT</td>
                    <td>Bạn có biết, 50% quỹ hoạt động của PN đến từ trợ cấp của các tập đoàn lớn. 
                Với sự xuất hiện của COVID-19, 39,4% hộ nghèo tăng thêm so với trước khi đại dịch xảy ra, 
                85,7% các doanh nghiệp ở Việt Nam bị ảnh hưởng và phải cắt giảm chi phí bao gồm các khoản tài trợ từ thiện. 
                PNV không đứng ngoài khó khăn đó, tính đến tháng 5 năm 2021, tới 79% quỹ hoạt động của PNV còn THIẾU.</td>
                    <td>hinh3.jpg</td>
                    <td>
                      <Badge color="success">display</Badge>
                    </td>
                    <td><Button block color="primary" >Edit</Button></td>
                  </tr>
                 
                  </tbody>
                </Table>
                <nav>
                  <Pagination>
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                  </Pagination>
                </nav>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}
export default AdminContent;
