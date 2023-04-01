
from django.contrib import admin
from django.apps import apps
from django.db.models import ManyToManyField, ManyToManyRel, ManyToOneRel
from django.db.models.fields import AutoField
from django.db.models.fields.related import ForeignKey


models = apps.get_app_config('api').get_models()
excluded = []

for model in models:
    # class CustomModelAdmin(admin.ModelAdmin):
    #     def string_rep(self, obj):
    #         return str(obj)
    #     string_rep.short_description  = 'Name/String Rep.'
    #     all = model._meta.get_fields()
    #     list_display = ['string_rep'] + [field.name for field in all if not isinstance(field, (ManyToOneRel,ManyToManyRel,ManyToManyField, ForeignKey, AutoField)) and not field.name in excluded]
    try: 
        admin.site.register(model)
        # admin.site.register(model,CustomModelAdmin)
    except admin.sites.AlreadyRegistered:
        pass