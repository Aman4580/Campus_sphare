// AdminDashboard.js
import React from 'react';
import Sidebar from './Sidebar';
//import axios from 'axios';
import {
  AdminDashboardContainer,
  Content,
  TopContent,
  Section,
  SectionTitle,
  CardContainer,
  Card,
  CardTitle,
  CardContent,
} from '../../styles/DashboardStyles';
//import { createEvents } from '../../service/operations/authAPI';

const AdminDashboard = () => {

  return (
    <AdminDashboardContainer>
      <Sidebar />
      <Content>
        <TopContent>
          <Section>
            <SectionTitle>Overview</SectionTitle>
            <CardContainer>
              <Card>
                <CardTitle>Total Students</CardTitle>
                <CardContent>500</CardContent>
              </Card>
              <Card>
                <CardTitle>Total Teachers</CardTitle>
                <CardContent>50</CardContent>
              </Card>
              <Card>
                <CardTitle>Total Classes</CardTitle>
                <CardContent>50</CardContent>
              </Card>
            </CardContainer>
          </Section>
        </TopContent>
      </Content>
    </AdminDashboardContainer>
  );
};

export default AdminDashboard;
