import styled from 'styled-components';

export const HistorySection = styled.section`
  padding: 100px 0;
  background-color: var(--white);
`;

export const HistoryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--dark);
  text-align: center;
  margin-bottom: 1rem;
`;

export const HistorySubtitle = styled.p`
  font-size: 1.1rem;
  color: var(--text);
  text-align: center;
  margin-bottom: 4rem;
`;

export const Timeline = styled.div`
  position: relative;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      var(--primary) 0%,
      var(--primary) 100%
    );
    opacity: 0.2;
  }
`;

export const TimelineYear = styled.div`
  margin-bottom: 3rem;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const YearLabel = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 1.5rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -2.5rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    background-color: var(--primary);
    border-radius: 50%;
    box-shadow: 0 0 0 0.5rem rgba(var(--primary-rgb), 0.1);
  }
`;

export const EventsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const EventItem = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1.5rem;
  background: var(--light-bg);
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const EventDate = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary);
  min-width: 40px;
`;

export const EventContent = styled.div`
  flex: 1;
`;

export const EventTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--dark);
  margin-bottom: 0.5rem;
`;

export const EventDescription = styled.p`
  font-size: 1rem;
  color: var(--text);
  line-height: 1.6;
`;