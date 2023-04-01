from django.db import models

# Create your models here.


class Branch(models.Model):
    name = models.CharField(max_length=250)

    def __str__(self):
        return self.name


class Section(models.Model):
    name = models.CharField(max_length=250)
    branch = models.ForeignKey(
        'Branch', on_delete=models.CASCADE, related_name='sections')

    def __str__(self):
        return self.name


class Venue(models.Model):
    name = models.CharField(max_length=250)

    def __str__(self):
        return self.name


class Classroom(models.Model):
    name = models.CharField(max_length=250)
    venue = models.ForeignKey(
        'Venue', on_delete=models.CASCADE, related_name='classrooms')
    camera_id = models.CharField(max_length=250, blank=True, null=True)
    strength = models.IntegerField()

    def __str__(self):
        return self.name


class Teacher(models.Model):
    name = models.CharField(max_length=250)

    def __str__(self):
        return self.name


class Period(models.Model):
    name = models.CharField(max_length=250)

    def __str__(self):
        return self.name


class Subject(models.Model):
    name = models.CharField(max_length=250)

    def __str__(self):
        return self.name


class Class(models.Model):
    period = models.ForeignKey(
        'Period', on_delete=models.CASCADE, related_name='classes')
    classroom = models.ForeignKey(
        'Classroom', on_delete=models.CASCADE, related_name='classes')
    section = models.ForeignKey(
        'Section', on_delete=models.CASCADE, related_name='classes')
    teacher = models.ForeignKey(
        'Teacher', on_delete=models.CASCADE, related_name='classes')
    subject = models.ForeignKey(
        'Subject', on_delete=models.CASCADE, related_name='classes')
    student_strength = models.IntegerField(default=0)
    name = models.CharField(max_length=250, blank=True, null=True)

    def __str__(self):
        return f'{self.subject} {self.teacher}'
