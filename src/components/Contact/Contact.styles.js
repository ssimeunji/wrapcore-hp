import styled from 'styled-components';

export const ContactSection = styled.section`
  padding: 100px 0;
  background: var(--light);
`;

export const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 1rem;
  text-align: center;
`;

export const ContactSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text);
  text-align: center;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactForm = styled.div`
  background: var(--white);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

export const FormTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--dark);
  margin-bottom: 1rem;
`;

export const FormDescription = styled.p`
  font-size: 1rem;
  color: var(--text);
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text);
`;

export const Input = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
  }
`;

export const TextArea = styled.textarea`
  padding: 0.8rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
  }
`;

export const SubmitButton = styled.button`
  background: var(--primary);
  color: var(--white);
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background: var(--secondary);
    transform: translateY(-2px);
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InfoTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--dark);
  margin-bottom: 1rem;
`;

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const InfoIcon = styled.div`
  font-size: 1.5rem;
  color: var(--primary);
  background: rgba(37, 99, 235, 0.1);
  padding: 1rem;
  border-radius: 12px;
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const InfoLabel = styled.span`
  font-size: 0.9rem;
  color: var(--text);
  font-weight: 500;
`;

export const InfoLink = styled.a`
  font-size: 1rem;
  color: var(--dark);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--primary);
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  margin-top: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;