FROM python:3.9.13-alpine3.15
WORKDIR /api_rifa
COPY . .
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
RUN pip install -r /api_rifa/requeriments.txt
CMD ["python3", "/api_rifa/manage.py", "runserver", "0.0.0.0:8001"] 
